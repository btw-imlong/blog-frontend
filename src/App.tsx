import Navbar from "./Layout/Navbar";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Footer from "./Layout/footer";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Card />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
