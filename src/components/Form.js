import { Link } from "react-router-dom";

import styles from "../styles/app.module.css";

const Form = ({ onSubmit, title, isHasError, errorMsg, children }) => {
  const pathname = window.location.pathname;

  return (
    <form
      className={(styles.form, isHasError ? styles.error : "")}
      onSubmit={onSubmit}
    >
      <h2 className={styles.title}>{title}</h2>
      {isHasError && <p role="alert">{errorMsg}</p>}
      {children}
      <button type="submit" className={styles.btn}>
        {title}
      </button>
      {pathname.includes("sign") && (
        <p className={styles.redirect}>
          Don`t have an account?{" "}
          <Link to={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}>
            {pathname === "/sign-in" ? "Sign Up" : "Sign In"}
          </Link>
        </p>
      )}
    </form>
  );
};

export default Form;
