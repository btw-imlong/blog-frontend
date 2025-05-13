import { Route, Routes, useLocation } from "react-router";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import Footer from "./Layout/footer";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Sponsor from "./Pages/Sponsor";
import Privacy from "./Pages/Privacy";
import WhatWeDo from "./Pages/What-do-we-do";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import BlogPage from "./Pages/blog";
import BlogDetail from "./Pages/blog-detail";

function App() {
  const location = useLocation();
  const hideLayout = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponser" element={<Sponsor />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/What-we-do" element={<WhatWeDo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog-detail/:id" element={<BlogDetail />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
