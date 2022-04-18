import styles from "../styles/app.module.css";

const Input = ({ labelTitle, ...props }) => {
  return (
    <label className={styles.label}>
      <strong>{labelTitle}</strong>
      <input className={styles.input} {...props} />
    </label>
  );
};

export default Input;
