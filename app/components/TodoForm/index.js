import { useState } from "react";
import styles from "./TodoForm.module.scss";

function today() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

export default function TodoForm({ onSubmit }) {
  const [input, setInput] = useState("");
  const [deadline, setDeadline] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: input,
        deadline: deadline || today(),
        completed: false,
      },
    ]);

    setInput("");
    setDeadline("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <p>タスク</p>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
      </label>
      <label>
        <p>期限日</p>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </label>
      <button type="submit" className={styles.submit}>
        追加
      </button>
    </form>
  );
}
