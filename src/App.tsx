import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { fetchColorPalette } from "./colorGenerator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [hasLoaded, setLoaded] = useState<Boolean>(false);
  const [palette, setPalette] = useState<String[]>();

  useEffect(() => {
    if (!hasLoaded) {
      fetchColorPalette()
        .then((palette) => setPalette(palette))
        .then(() => setLoaded(true));
    }
  }, [hasLoaded]);

  return (
    <Router>
      {palette && (
        <div className="h-screen min-h-screen">
          <Navbar palette={palette} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About palette={palette} />} />
            <Route path="/projects" element={<Projects palette={palette} />} />
            <Route path="/contact" element={<Contact palette={palette} />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
