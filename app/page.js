"use client";

import { useState } from "react";

import TodoForm from "@/app/components/TodoForm";
import TodoList from "@/app/components/TodoList";
import styles from "./page.module.scss";

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      name: "デザインカンプを確認する",
      deadline: "2026-09-10",
      completed: false,
    },
    {
      id: "2",
      name: "コンポーネントに分割する",
      deadline: "2026-09-12",
      completed: false,
    },
    {
      id: "3",
      name: "SCSS Module に置き換える",
      deadline: "2026-09-14",
      completed: false,
    },
  ]);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.headerText}>Todo</h1>
      </header>
      <main className={styles.main}>
        <TodoForm onSubmit={setTasks} />
        <TodoList tasks={tasks} onSubmit={setTasks} />
      </main>
    </div>
  );
}
