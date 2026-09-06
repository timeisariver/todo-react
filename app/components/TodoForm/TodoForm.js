import styles from "./TodoForm.module.scss";

export default function TodoForm() {
  return (
    <form className={styles.form}>
      <label>
        <p>タスク</p>
        <input type="text" required />
      </label>
      <label>
        <p>期限日</p>
        <input type="date" />
      </label>
      <button type="submit" className={styles.submit}>
        追加
      </button>
    </form>
  );
}
