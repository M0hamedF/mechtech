import { Link } from "react-router-dom";

import styles from "../styles/app.module.css";

const Card = ({ href, bg, classes, children }) => (
  <article className={classes}>
    <Link
      to={href}
      className={styles.cardLink}
      style={{ backgroundImage: `url(${bg})` }}
    >
      {children}
    </Link>
  </article>
);

export default Card;
