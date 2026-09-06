"use client";

import { useState } from "react";

import TodoForm from "@/app/components/TodoForm/TodoForm";
import TodoList from "@/app/components/TodoList/TodoList";
import styles from "./page.module.scss";

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: crypto.randomUUID(),
      name: "デザインカンプを確認する",
      deadline: "2026-09-10",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      name: "コンポーネントに分割する",
      deadline: "2026-09-12",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      name: "SCSS Module に置き換える",
      deadline: "",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      name: "環境構築",
      deadline: "2026-09-01",
      completed: true,
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
