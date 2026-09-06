import TodoRow from "@/app/components/TodoRow/TodoRow";
import styles from "./TodoList.module.scss";

export default function TodoList({ tasks, onSubmit }) {
  return (
    <div className={styles.content}>
      <label className={styles.showCompleted}>
        <input type="checkbox" defaultChecked />
        <p>完了タスクを表示</p>
      </label>
      <div className={styles.head}>
        <div className={styles.headItem}>完了</div>
        <div className={`${styles.headItem} ${styles.headItemName}`}>
          タスク
        </div>
        <div className={styles.headItem}>期限日</div>
        <div className={styles.headItem}>削除</div>
      </div>
      <div className={styles.list}>
        {tasks.map((task) => (
          <TodoRow
            onSubmit={onSubmit}
            key={task.id}
            id={task.id}
            name={task.name}
            deadline={task.deadline}
            completed={task.completed}
          />
        ))}
      </div>
    </div>
  );
}
