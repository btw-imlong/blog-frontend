import Card from "../Components/Card"
import pic1 from "../assets/pic1.jpg";
import pic from "../assets/pic-blog1.jpg";
import ModernButton from "../Components/modern-button"; 

const BlogPage = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">High-Converting Landing Page</h1>
          <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex justify-center gap-4">
                <ModernButton text="Learn More" />
            </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Advantages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-md shadow-md h-48 flex items-center justify-center"
              >
                <span>Image {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Value Proposition</h3>
            <p className="mb-4">
              There are many variations of passages of Lorem Ipsum available, but the majority...
            </p>
            <div className="flex gap-8 text-sm">
              <div>
                <p className="font-bold">Item One</p>
                <p>Description</p>
              </div>
              <div>
                <p className="font-bold">Item Two</p>
                <p>Description</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center">
            <span>Image</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Features</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available...
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-700 h-48 flex items-center justify-center rounded-md">
              <img src={pic} className="w-150 h-48 rounded-md" alt="" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ModernButton text="Feature 1 🌟" />
              <ModernButton text="Feature 2 🌟" />
              <ModernButton text="Feature 3 🌟" />
              <ModernButton text="Feature 4 🌟" />
              <ModernButton text="Feature 5 🌟" />
              <ModernButton text="Feature 6 🌟" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Blog Section */}
      <section className="py-5 bg-gray-100">
        <div className="max-w-1xl mx-auto px-2 text-center">
          <h2 className="text-2xl font-bold mt-6">Our Blog</h2>
          <Card></Card>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Introduction Materials</h3>
            <p>
              Detailed explanation and value of using your blog platform or company service...
            </p>
          </div>
          <div className="h-64 bg-gray-200 rounded-md flex items-center justify-center">
            <span>
                <img className="w-3xl h-[300px] object-cover" src={pic1} alt="" />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
