// CardSection.tsx
import { useEffect, useState } from "react";
import ModernButton from "./modern-button";
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
  category?: {
    tittle: string;
  };
}

interface CardSectionProps {
  selectedCategory: string | null;
}
const HoverCard = ({ documentId, image, title, description }: any) => {
  return (
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
          <div className="flex justify-center">
            <ModernButton text=" 🌟 Explore" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const CardSection = ({ selectedCategory }: CardSectionProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/blogs?populate=*");
        const json = await res.json();
        let allBlogs = json.data || [];

        if (selectedCategory) {
          allBlogs = allBlogs.filter(
            (blog: any) =>
              blog.category?.tittle?.toLowerCase() === selectedCategory.toLowerCase()
          );
        }

        setBlogs(allBlogs);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, [selectedCategory]);

  return (
    <div className="h-1/3 flex items-center justify-center px-4 py-5">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap">
        {blogs.map((blog) => {
          const imageUrl =
            blog.images?.formats?.medium?.url ||
            blog.images?.url ||
            "https://via.placeholder.com/300x200.png?text=No+Image";

          return (
            
          <HoverCard
  key={blog.documentId}
  documentId={blog.documentId}
  image={imageUrl}
  title={blog.tittle}
  description={blog.contant.replace(/<[^>]+>/g, "").slice(0, 100) + "..."}
/>

          );
        })}
      </div>
    </div>
  );
};

export default CardSection;
