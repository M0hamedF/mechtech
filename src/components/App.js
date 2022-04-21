import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getAll } from "../store/slices/products";

import styles from "../styles/app.module.css";
import Nav from "../layouts/Nav";
import Home from "../pages/Home";
import Sign from "../pages/Sign";
import Category from "../pages/Category";
import Footer from "../layouts/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <BrowserRouter>
      <Nav />

      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Sign />} />
          <Route path="/sign-up" element={<Sign />} />
          <Route path="/category/:name" element={<Category />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
