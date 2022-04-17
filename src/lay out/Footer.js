import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className="prim">
        <div className="info">
          <div className="column">
            <h4>COMPANY</h4>
            <a href>About Us</a>
            <a href>Feedback</a>
          </div>
          <div className="column">
            <h4>SOCIAL MEDIA</h4>
            <div>
              <a href="https://www.facebook.com/">Facebook</a>
            </div>
            <div>
              <a href="https://www.instagram.com/">Instagram</a>
            </div>
          </div>
          <div className="column">
            <h4>SUPPORT</h4>
            <a href="tel:19111">19111</a>
            <a href="mailto:whatever@example.com">Email</a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="copyright">
          <p> Copyright &copy; 2022 Team 12. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
}
