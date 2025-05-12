import Navbar from "./Layout/Navbar";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Footer from "./Layout/footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
