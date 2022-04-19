import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { login } from "../store/slices/authedUser";
import { getFromStorage, getStorageKey } from "../utils/helpers";

import Nav from "../layouts/Nav";
import Home from "../pages/Home";
import Sign from "../pages/Sign";
import Footer from "../layouts/Footer";

function App() {
  useEffect(() => {
    localStorage.getItem(getStorageKey()) && login(getFromStorage());
  }, []);

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
