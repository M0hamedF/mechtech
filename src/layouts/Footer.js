import { Link } from "react-router-dom";

import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.prim}>
        <div className={styles.info}>
          <div className={styles.column}>
            <h4>COMPANY</h4>
            <Link to="/about-us">About Us</Link>
            <Link to="/feedback">Feedback</Link>
          </div>
          <div className={styles.column}>
            <h4>SOCIAL MEDIA</h4>
            <div>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className={styles.column}>
            <h4>SUPPORT</h4>
            <a href="tel:19111">19111</a>
            <a href="mailto:whatever@example.com">Email</a>
          </div>
        </div>
      </section>

      <p className={styles.copyrights}>
        Copyright &copy; 2022 Team 12. All rights reserved.
      </p>
    </footer>
  );
}
