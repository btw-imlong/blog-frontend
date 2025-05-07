import { Route, Routes } from "react-router";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <footer />
      </Routes>
    </>
  );
}

export default App;
