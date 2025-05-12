import Navbar from "./Layout/Navbar";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Footer from "./Layout/footer";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Sponsor from "./Pages/Sponsor";
import Privacy from "./Pages/Privacy";
import WhatWeDo from "./Pages/What-do-we-do";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponser" element={<Sponsor />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/What-we-do" element={<WhatWeDo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
