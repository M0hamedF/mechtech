import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { checkLogin } from "../store/slices/authedUser";

import Nav from "../layouts/Nav";
import Home from "../pages/Home";
import Sign from "../pages/Sign";
import Footer from "../layouts/Footer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLogin());
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
