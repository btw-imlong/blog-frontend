import ModernButton from "../Components/modern-button";
import Picture1 from "../assets/Home1.png";

const Home = () => {
  return (
    <div
      className="text-white flex flex-col items-center justify-center py-24 md:py-36 lg:py-48 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${Picture1})` }}
    >
      <div className="container mx-auto px-4 text-center relative z-10 bg-black/50 p-4 rounded-xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
          Publish your passions, your way
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 md:mb-12 text-gray-200 max-w-3xl mx-auto">
          Create a unique and beautiful blog with our platform. Share your stories, your way.
        </p>
        <div className="flex justify-center">
          <ModernButton text="CREATE YOUR BLOG" />
        </div>
      </div>
    </div>
  );
};

export default Home;
