import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "../layouts/Nav";
import Home from "../pages/Home";
import Sign from "../pages/Sign";
import Footer from "../layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Sign />} />
        <Route path="/sign-up" element={<Sign />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
