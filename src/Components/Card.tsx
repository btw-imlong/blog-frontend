import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Blog {
  id: number;
  documentId: string;
  tittle: string;
  contant: string;
  images?: {
    url?: string;
    formats?: {
      medium?: { url: string };
    };
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HoverCard = ({ documentId, image, title, description }: any) => (
  <Link to={`/blog-detail/${documentId}`}>
    <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white transform hover:scale-105 hover:bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 transition-all duration-500 ease-in-out cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="Card"
          className="w-[16rem] h-48 object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl line-clamp-1 font-bold text-purple-700 mb-2 font-mono transition-all duration-300 hover:tracking-wide">
          {title}
        </h2>
        <p className="text-gray-700 text-sm font-light mb-4 italic">
          {description}
        </p>
      </div>
    </div>
  </Link>
);

const CardSection = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/blogs?populate=*");
        const json = await res.json();
        setBlogs(json.data || []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    const title = blog.tittle?.toLowerCase() || "";
    const content = blog.contant?.toLowerCase() || "";
    return (
      title.includes(searchText.toLowerCase()) ||
      content.includes(searchText.toLowerCase())
    );
  });

  return (
    <div className="px-4 py-6">
      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="🔍 Search blog..."
          className="w-full max-w-md p-3 border border-purple-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-8 justify-center items-start">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => {
            const imageUrl =
              blog.images?.formats?.medium?.url ||
              blog.images?.url ||
              "https://via.placeholder.com/300x200.png?text=No+Image";

            return (
              <HoverCard
                key={blog.id}
                documentId={blog.documentId}
                image={imageUrl}
                title={blog.tittle}
                description={
                  blog.contant.replace(/<[^>]+>/g, "").slice(0, 100) + "..."
                }
              />
            );
          })
        ) : (
          <p className="text-gray-500">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default CardSection;
