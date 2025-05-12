import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaThumbsUp,
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaHeart,
  FaRegCommentDots,
  FaAngry,
} from "react-icons/fa";
import Detail1 from "../assets/detail-img1.png";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [activeReaction, setActiveReaction] = useState<
    "like" | "dislike" | "love" | "angry" | null
  >(null);
  const [reactionCount, setReactionCount] = useState<number>(157);
  const [commentCount, setCommentCount] = useState<number>(0);
  const [comments, setComments] = useState<{ id: number; text: string }[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [showCommentBox, setShowCommentBox] = useState<boolean>(false);
  const [showCommentList, setShowCommentList] = useState<boolean>(false);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  const handleReaction = (type: "like" | "dislike" | "love" | "angry") => {
    if (activeReaction === type) {
      setActiveReaction(null);
      setReactionCount((prev) => prev - 1);
    } else {
      if (!activeReaction) {
        setReactionCount((prev) => prev + 1);
      }
      setActiveReaction(type);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments((prev) => [...prev, { id: Date.now(), text: newComment.trim() }]);
      setCommentCount((prev) => prev + 1);
      setNewComment("");
      setShowCommentBox(false);
    }
  };

  const handleEditSubmit = (id: number) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id ? { ...comment, text: editingText } : comment
      )
    );
    setEditingCommentId(null);
    setEditingText("");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Enjoy With Me</h1>
      <p className="mb-6 text-gray-600">Posted on May 12, 2025</p>

      <div className="mb-4">
        <img
          className="w-full h-64 lg:h-[36rem] object-cover rounded-md"
          src={Detail1}
          alt="Blog Visual"
        />
      </div>

      {/* Reactions and Comment Actions */}
      <div className="flex items-center gap-6 mb-8 text-gray-600 text-base">
        {/* Reactions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleReaction("like")}
            className={`hover:text-blue-600 transition cursor-pointer ${
              activeReaction === "like" ? "text-blue-600" : ""
            }`}
          >
            {activeReaction === "like" ? <FaThumbsUp /> : <FaRegThumbsUp />}
          </button>
          <button
            onClick={() => handleReaction("dislike")}
            className={`hover:text-red-500 transition cursor-pointer ${
              activeReaction === "dislike" ? "text-red-500" : ""
            }`}
          >
            <FaRegThumbsDown />
          </button>
          <button
            onClick={() => handleReaction("love")}
            className={`hover:text-pink-500 transition cursor-pointer ${
              activeReaction === "love" ? "text-pink-500" : ""
            }`}
          >
            <FaHeart />
          </button>
          <button
            onClick={() => handleReaction("angry")}
            className={`hover:text-yellow-600 transition cursor-pointer ${
              activeReaction === "angry" ? "text-yellow-600" : ""
            }`}
          >
            <FaAngry />
          </button>
          <span className="text-sm text-gray-500">({reactionCount})</span>
        </div>

        {/* Comment Actions */}
        <button
          onClick={() => setShowCommentBox((prev) => !prev)}
          className="flex items-center gap-1 hover:text-blue-600 transition"
        >
          <FaRegCommentDots />
        </button>

        <button
          onClick={() => setShowCommentList((prev) => !prev)}
          className="text-sm text-gray-500 hover:text-blue-600 transition"
        >
          ({commentCount})
        </button>
      </div>

      {/* Add Comment Box */}
      {showCommentBox && (
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <textarea
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={3}
            placeholder="Write your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Post Comment
          </button>
        </form>
      )}

      {/* View Comment List (toggle) */}
      {showCommentList && comments.length > 0 && (
        <div className="space-y-4">
          {comments.map((comment) =>
            editingCommentId === comment.id ? (
              <div key={comment.id} className="p-3 border rounded-md bg-gray-50">
                <textarea
                  className="w-full border p-2 rounded-md"
                  rows={2}
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button
                  className="mt-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  onClick={() => handleEditSubmit(comment.id)}
                >
                  Save
                </button>
              </div>
            ) : (
              <div key={comment.id} className="p-3 border rounded-md bg-gray-50">
                <p>{comment.text}</p>
                <button
                  className="mt-1 text-sm text-blue-500 hover:underline"
                  onClick={() => {
                    setEditingCommentId(comment.id);
                    setEditingText(comment.text);
                  }}
                >
                  Edit
                </button>
              </div>
            )
          )}
        </div>
      )}

      <p className="mt-8">
        We went to the beach and enjoyed the sun, sand, and sea breeze. From the shore,
        we saw a beautiful island and took a boat to get a closer look at its stunning views.
      </p>
    </div>
  );
};

export default BlogDetail;
