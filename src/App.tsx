import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import ModernButton from "./Components/modern-button";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ModernButton text="text here" theme="primary" />
    </>
  );
}

export default App;
