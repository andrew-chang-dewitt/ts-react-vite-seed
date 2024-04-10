import styles from "./Button.module.css";

export function Button({ count, onClick }) {
  return (
    <button className={styles.red} onClick={onClick}>
      count is {count}
    </button>
  );
}
