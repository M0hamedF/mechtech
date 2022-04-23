import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { add } from "../store/slices/cart";
import { URLToText } from "../utils/helpers";

import styles from "../styles/product.module.css";
import components from "../styles/app.module.css";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const { catName, prodName } = useParams("catName");
  const [selectedImg, setSelectedImg] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products) {
      const t = products[URLToText(catName)].filter((product) => {
        return product.product_name === URLToText(prodName);
      })[0];
      setProduct(t);
      setSelectedImg(product?.product_image1);
    }
  }, [products]);

  const handleClick = (e) => {
    setSelectedImg(e.target.firstElementChild.src);
  };

  return (
    <main className={styles.product}>
      {product && (
        <>
          <h1 className={styles.title}>{product.product_name}</h1>
          <div className={styles.wrapper}>
            <section>
              <div className={styles.preview} aria-hidden="true">
                <img src={product.product_image1} alt="" />
              </div>

              <ul className={styles.controls}>
                <li>
                  <button
                    onClick={handleClick}
                    aria-label="Preview product image 1"
                  >
                    <img src={product.product_image1} alt="" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleClick}
                    aria-label="Preview product image 2"
                  >
                    <img src={product.product_image2} alt="" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleClick}
                    aria-label="Preview product image 3"
                  >
                    <img src={product.product_image3} alt="" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleClick}
                    aria-label="Preview product image 4"
                  >
                    <img src={product.product_image4} alt="" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleClick}
                    aria-label="Preview product image 5"
                  >
                    <img src={product.product_image5} alt="" />
                  </button>
                </li>
              </ul>
            </section>

            <section className={styles.specifications}>
              <h2 className={styles.title}>Specifications</h2>
              <ul>
                {Object.keys(product.details).map((detail) => (
                  <li key={detail}>
                    # {detail}: <span>{product.details[detail]}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.price}>
                Price: <span>{product.price}$</span>
              </div>

              <button
                className={components.btn}
                onClick={() => dispatch(add(product))}
              >
                Add to cart
              </button>
            </section>
          </div>
        </>
      )}
    </main>
  );
};

export default Product;
