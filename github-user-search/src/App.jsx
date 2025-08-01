import { BrowserRouter as Router, Routes, Route } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;
