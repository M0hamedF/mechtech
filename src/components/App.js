import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Nav from "../layouts/Nav";
import Footer from "../layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
