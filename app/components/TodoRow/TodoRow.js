import Checkbox from "@/app/components/Checkbox/Checkbox";
import TrashIcon from "@/app/components/icons/TrashIcon";
import styles from "./TodoRow.module.scss";

export default function TodoRow({
  onSubmit,
  id,
  name,
  deadline = "",
  completed,
}) {
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
        <Checkbox checked={completed} handleToggle={handleToggle} />
      </div>
      <div className={`${styles.col} ${styles.name}`}>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div className={`${styles.col} ${styles.deadline}`}>
        <input
          type="date"
          value={deadline}
          onChange={(e) => handleChange("deadline", e.target.value)}
        />
      </div>
      <div className={`${styles.col} ${styles.delete}`}>
        <button onClick={handleDelete}>
          <TrashIcon className={styles.trash} />
        </button>
      </div>
    </div>
  );
}
