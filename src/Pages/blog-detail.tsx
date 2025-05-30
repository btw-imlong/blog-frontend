import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface Blog {
  tittle: string;
  contant: string;
  images?: {
    url?: string;
    formats?: {
      medium?: { url: string };
    };
  };
}

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/blogs/${id}?populate=*`
        );
        const data = response.data.data;

        setBlog({
          tittle: data.tittle,
          contant: data.contant,
          images: data.images,
        });
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow-2xl px-6 md:px-12 mt-12 rounded-2xl">
      {blog ? (
        <>
          <div className="w-full">
            <img
              src={
                blog.images?.formats?.medium?.url ||
                blog.images?.url ||
                "https://via.placeholder.com/600x400?text=No+Image"
              }
              alt={blog.tittle}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
          </div>

          <div className="py-6">
            <h1 className="text-3xl font-bold text-purple-700 mb-4 font-serif">
              {blog.tittle}
            </h1>
            <div
              className="text-gray-800 leading-relaxed prose max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.contant }}
            ></div>
          </div>
        </>
      ) : (
        <p className="text-center py-10 text-gray-500">Loading blog...</p>
      )}
    </div>
  );
};

export default BlogDetail;
