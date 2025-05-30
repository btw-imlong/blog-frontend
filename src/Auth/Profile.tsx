import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProfilePicture {
  url: string;
}

interface User {
  id: number;
  username: string;
  email: string;
  profilePicture?: ProfilePicture;
}

const API_URL = "http://localhost:1337/api/users/me";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("jwt");
  const navigate = useNavigate();

  // Redirect if not logged in
  useEffect(() => {
    if (!token) {
      toast.warning("Please log in to view your profile");
      navigate("/login");
    }
  }, [token, navigate]);

  // Fetch user info
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API_URL}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
        setUsername(res.data.username);
        setEmail(res.data.email);
        setProfilePicture(res.data.profilePicture?.url || null);
      } catch (err) {
        toast.error("Failed to fetch user data");
        console.error(err);
      }
    };
    if (token) fetchUser();
  }, [token]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setProfilePicture(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file: File): Promise<number> => {
    const formData = new FormData();
    formData.append("files", file);
    const res = await axios.post(`${API_URL}/api/upload`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data[0].id;
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      let imageId;
      if (selectedFile) {
        imageId = await uploadImage(selectedFile);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const updateData: any = { username, email };
      if (imageId) updateData.profilePicture = imageId;
      if (password) updateData.password = password;

      await axios.put(`${API_URL}/api/users/${user?.id}`, updateData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const updatedUser = {
        ...user!,
        username,
        email,
        profilePicture: imageId
          ? { url: profilePicture! }
          : user?.profilePicture,
      };

      setUser(updatedUser);
      setEditMode(false);
      setPassword("");
      window.dispatchEvent(new Event("userUpdated"));
      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error("Update failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <div className="text-center mt-10">Loading profile...</div>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow relative">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>

      <div className="flex flex-col items-center mb-6">
        <img
          src={
            profilePicture
              ? profilePicture.startsWith("http")
                ? profilePicture
                : `${API_URL}${profilePicture}`
              : "/default-avatar.png"
          }
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-3"
        />
        {editMode && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2 text-sm"
          />
        )}
      </div>

      {editMode ? (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              className="border rounded w-full p-2 mt-1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              className="border rounded w-full p-2 mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">
              New Password
            </label>
            <input
              type="password"
              className="border rounded w-full p-2 mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Leave blank to keep current password"
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleSave}
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save"}
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="bg-gray-300 text-black px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="mb-2">
            <strong>Username:</strong> {user.username}
          </p>
          <p className="mb-2">
            <strong>Email:</strong> {user.email}
          </p>
          <button
            onClick={() => setEditMode(true)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;
