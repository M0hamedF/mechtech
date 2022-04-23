import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { remove } from "../store/slices/cart";

import cartImg from "../img/cart.gif";
import t from "../img/hero-img.png";

import styles from "../styles/cart.module.css";
import components from "../styles/app.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <main className={styles.Cart}>
      <section className={cart.length ? styles.full : styles.empty}>
        {cart.length ? (
          cart.map((item) => (
            <Product
              img={item.product_image1}
              name={item.product_name}
              handleClick={() => dispatch(remove(item))}
            />
          ))
        ) : (
          <>
            <img src={cartImg} alt="Moving cart" />

            <h2>Your cart is empty</h2>

            <Link to="/" className={components.btn}>
              Shop now!
            </Link>
          </>
        )}
      </section>
    </main>
  );
};

const Product = ({ img, name, handleClick }) => (
  <article className={styles.cartProduct}>
    <div className={styles.detail}>
      <img src={img} alt={`${name}`} />
      <h3>{name}</h3>
    </div>

    <button onClick={handleClick} aria-label="Remove this product from cart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="var(--primary)"
        fillRule="evenodd"
        aria-hidden="true"
      >
        <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
        <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
      </svg>
    </button>
  </article>
);

export default Cart;
/*
cart.map((item) => (
            <Product img={item.product_image1} name={item.product_name} />
          ))
          */
