import Checkbox from "@/app/components/Checkbox/Checkbox";
import TrashIcon from "@/app/components/icons/TrashIcon";
import styles from "./TodoRow.module.scss";

export default function TodoRow({
  onSubmit,
  id,
  name,
  deadline = "",
  completed = false,
}) {
  function handleDelete() {
    console.log("test");

    onSubmit((prev) => {
      return prev.filter((task) => task.id !== id);
    });
  }

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <Checkbox checked={completed} />
      </div>
      <div className={`${styles.col} ${styles.name}`}>
        <input type="text" defaultValue={name} />
      </div>
      <div className={`${styles.col} ${styles.deadline}`}>
        <input type="date" defaultValue={deadline} />
      </div>
      <div className={`${styles.col} ${styles.delete}`} onClick={handleDelete}>
        <TrashIcon className={styles.trash} />
      </div>
    </div>
  );
}
