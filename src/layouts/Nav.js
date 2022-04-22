import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../store/slices/authedUser";
import { textToURL } from "../utils/helpers";

import styles from "../styles/nav.module.css";
import avatarSrc from "../img/avatar.png";

const Nav = ({ authedUser, cart, products }) => {
  const showMenu = (e) => {
    e.target.parentElement.classList.add(styles.open);
    e.target.ariaExpanded = "true";
  };
  const hideMenu = (e) => {
    e.target.parentElement.classList.remove(styles.open);
    e.target.ariaExpanded = "false";
  };
  const toggleMenu = (e) => {
    e.preventDefault();
    e.target.parentElement.classList.toggle(styles.open);
    e.target.ariaExpanded = e.target.parentElement.classList.contains(
      styles.open
    )
      ? "true"
      : "false";
    return false;
  };

  const [isOpened, setIsOpened] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to="/">
        MECH<span>TECH</span>
      </Link>

      <ul className={styles.icons}>
        <CartIcon cart={cart} />

        {authedUser && (
          <AvatarIcon authedUser={authedUser} toggleMenu={toggleMenu} />
        )}
        <NavLinksToggler isOpened={isOpened} setIsOpened={setIsOpened} />
      </ul>

      <ul
        role="menu"
        id="nav-menu"
        className={styles.links}
        style={isOpened ? { display: "flex" } : {}}
      >
        <li>
          <Link to="/">Home</Link>
        </li>

        <li
          className={styles.submenu}
          onMouseOver={(e) => setTimeout(() => showMenu(e), 500)}
          onMouseOut={(e) => setTimeout(() => hideMenu(e), 500)}
        >
          <Link
            to="..."
            aria-haspopup="true"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            Categories
          </Link>
          <ul className={styles.dropdown}>
            {products &&
              Object.keys(products).map((key) => (
                <li>
                  <Link to={`/products/${textToURL(key)}`}>{key}</Link>
                </li>
              ))}
          </ul>
        </li>

        <li>
          <Link to="/top-products">Top Products</Link>
        </li>

        {authedUser ? (
          <AvatarIcon authedUser={authedUser} toggleMenu={toggleMenu} />
        ) : (
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
        )}

        <CartIcon cart={cart} />
      </ul>
    </nav>
  );
};

const CartIcon = ({ cart }) => (
  <li className={styles.cart}>
    <Link
      to="/cart"
      aria-label="To cart page"
      className={cart.length ? styles.dot : ""}
    >
      <svg
        width="24"
        height="24"
        fill="var(--primary)"
        viewBox="0 0 24 24"
        focusable="false"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <g>
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        </g>
      </svg>
    </Link>
  </li>
);

const AvatarIcon = ({ authedUser }) => {
  const dispatch = useDispatch();
  const toggleMenu = (e) => {
    e.target.parentElement.classList.toggle(styles.open);
  };

  return (
    <li className={styles.avatar}>
      <button
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="avatarMenu"
      >
        <img
          src={authedUser.img || avatarSrc}
          alt={`${authedUser.name} avatar`}
        />
      </button>

      <ul id="avatarMenu" className={styles.avatarDrop}>
        <li>
          <Link to={`/user/${authedUser.username}`}>Profile</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </li>
      </ul>
    </li>
  );
};

const NavLinksToggler = ({ isOpened, setIsOpened }) => (
  <li className={styles.linksToggler}>
    <button
      aria-controls="nav-menu"
      aria-label={isOpened ? "Hide menu" : "Show menu"}
      onClick={() => setIsOpened(!isOpened)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="var(--primary)"
        fillRule="evenodd"
        aria-hidden="true"
      >
        {!isOpened ? (
          <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
        ) : (
          <>
            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
          </>
        )}
      </svg>
    </button>
  </li>
);

export default connect(({ authedUser, cart, products }) => ({
  authedUser,
  cart,
  products,
}))(Nav);
