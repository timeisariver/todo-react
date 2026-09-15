import Checkbox from "@/app/components/Checkbox";
import TrashIcon from "@/app/components/icons/TrashIcon";
import styles from "./TodoRow.module.scss";
import { useState } from "react";

export default function TodoRow({
  onSubmit,
  id,
  name,
  deadline = "",
  completed,
}) {
  const [prevTaskName, setPrevTaskName] = useState("");

  function handleDelete() {
    onSubmit((prev) => {
      return prev.filter((task) => task.id !== id);
    });
  }

  function handleToggle() {
    onSubmit((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function handleChange(type, data) {
    onSubmit((prev) =>
      prev.map((task) => (task.id === id ? { ...task, [type]: data } : task)),
    );
  }

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <Checkbox
          checked={completed}
          handleToggle={handleToggle}
          label={`${name} を完了にする`}
        />
      </div>
      <div className={`${styles.col} ${styles.name}`}>
        <input
          type="text"
          aria-label="タスク名"
          value={name}
          onFocus={() => setPrevTaskName(name)}
          onChange={(e) => handleChange("name", e.target.value)}
          onBlur={(e) => {
            if (e.target.value === "") {
              handleChange("name", prevTaskName);
            }
          }}
        />
      </div>
      <div className={`${styles.col} ${styles.deadline}`}>
        <input
          type="date"
          aria-label={`${name} の期限日`}
          value={deadline}
          onChange={(e) => handleChange("deadline", e.target.value)}
        />
      </div>
      <div className={`${styles.col} ${styles.delete}`}>
        <button
          type="button"
          aria-label={`${name} を削除`}
          onClick={handleDelete}
        >
          <TrashIcon className={styles.trash} />
        </button>
      </div>
    </div>
  );
}
