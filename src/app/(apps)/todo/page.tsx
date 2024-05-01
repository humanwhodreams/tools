"use client";

import { todos as FakeTodos } from "@/data/fake";
import { Todo } from "@/types/tools";
import { TodoInput } from "@/components/todo-input";
import { TodoList } from "@/components/todo-list";
import { useState } from "react";

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>(FakeTodos);

  function AddTodo(newTodo: Todo) {
    const data = [...todos, newTodo];
    setTodos(data);
  }

  return (
    <main className="relative max-w-3xl px-2 mx-auto">
      <section className="sticky inset-x-0 top-4">
        <TodoInput addTodo={AddTodo} />
      </section>
      <section>
        <TodoList todos={todos} />
      </section>
    </main>
  );
}
