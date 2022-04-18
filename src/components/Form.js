import { Link } from "react-router-dom";

import styles from "../styles/app.module.css";

const Form = ({ title, children }) => {
  const pathname = window.location.pathname;

  return (
    <form className={styles.form}>
      <h2 className={styles.title}>{title}</h2>
      {children}
      <button type="submit" className={styles.btn}>
        {title}
      </button>
      {pathname.includes("sign") && (
        <p className={styles.redirect}>
          Don`t have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
      )}
    </form>
  );
};

export default Form;
