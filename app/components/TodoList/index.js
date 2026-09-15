import TodoRow from "@/app/components/TodoRow";
import styles from "./TodoList.module.scss";
import { useState } from "react";

export default function TodoList({ tasks, onSubmit }) {
  const [showCompleted, setShowCompleted] = useState(false);

  const visibleTasks = tasks.filter((task) => showCompleted || !task.completed);

  return (
    <div className={styles.content}>
      <label className={styles.showCompleted}>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
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
        {visibleTasks.length === 0 ? (
          <p className={styles.empty}>
            {tasks.length === 0
              ? "タスクがありません。上のフォームから追加してください。"
              : "未完了のタスクはありません。"}
          </p>
        ) : (
          visibleTasks.map((task) => {
            return (
              <TodoRow
                onSubmit={onSubmit}
                key={task.id}
                id={task.id}
                name={task.name}
                deadline={task.deadline}
                completed={task.completed}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
