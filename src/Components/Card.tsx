import ModernButton from "./modern-button";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import { Link } from "react-router-dom";
interface HoverCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
}

const HoverCard = ({ id, image, title, description }: HoverCardProps) => {
  return (
    <Link to={`/blog-detail/${id}`}>
      <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white transform hover:scale-105 hover:bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 transition-all duration-500 ease-in-out cursor-pointer">
        <div className="overflow-hidden">
          <img
            src={image}
            alt="Card"
            className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>
        <div className="p-5">
          <h2 className="text-2xl line-clamp-1 font-bold text-purple-700 mb-2 font-mono transition-all duration-300 hover:tracking-wide">
            {title}
          </h2>
          <p className="text-gray-700 text-sm font-light mb-4 italic">
            {description}
          </p>
          <ModernButton text=" 🌟 Explore" />
        </div>
      </div>
    </Link>
  );
};

const CardSection = () => {
  return (
    <div className="h-1/3 flex items-center justify-center px-4 py-5">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <HoverCard
          id="1"
          image={pic5}
          title="Magic Forest"
          description="Explore the wonders of the."
        />
        <HoverCard
          id="2"
          image={pic4}
          title="Sky Adventure"
          description="Soar high with the clouds."
        />
        <HoverCard
          id="3"
          image={pic3}
          title="Ocean Secrets"
          description="Dive into the mysterious depths of."
        />
        <HoverCard
          id="4"
          image={pic2}
          title="Here's your"
          description="inside the container so the layout ."
        />
      </div>
    </div>
  );
};

export default CardSection;
