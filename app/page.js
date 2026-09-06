import TodoForm from "@/app/components/TodoForm/TodoForm";
import TodoList from "@/app/components/TodoList/TodoList";
import styles from "./page.module.scss";

const tasks = [
  { id: "1", name: "デザインカンプを確認する", deadline: "2026-09-10" },
  { id: "2", name: "コンポーネントに分割する", deadline: "2026-09-12" },
  { id: "3", name: "SCSS Module に置き換える", deadline: "" },
  {
    id: "4",
    name: "環境構築",
    deadline: "2026-09-01",
    completed: true,
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.headerText}>Todo</h1>
      </header>
      <main className={styles.main}>
        <TodoForm />
        <TodoList tasks={tasks} />
      </main>
    </div>
  );
}
