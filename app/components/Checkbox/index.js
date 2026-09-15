import CheckIcon from "@/app/components/icons/CheckIcon";
import styles from "./Checkbox.module.scss";

export default function Checkbox({ checked, handleToggle, label }) {
  const className = [styles.checkbox, checked && styles.checked]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={className}>
      <input
        type="checkbox"
        className={styles.input}
        aria-label={label}
        checked={checked}
        onChange={handleToggle}
      />
      <CheckIcon className={styles.check} />
    </label>
  );
}
