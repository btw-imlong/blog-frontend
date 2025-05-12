import Navbar from "./Layout/Navbar";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Footer from "./Layout/footer";

import BlogPage from "./Pages/blog";


function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/" element={<Home />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
