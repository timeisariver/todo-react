import CheckIcon from "@/app/components/icons/CheckIcon";
import styles from "./Checkbox.module.scss";

export default function Checkbox({ checked = false }) {
  const className = [styles.checkbox, checked && styles.checked]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={className}>
      <input
        type="checkbox"
        className={styles.input}
        defaultChecked={checked}
      />
      <CheckIcon className={styles.check} />
    </label>
  );
}
