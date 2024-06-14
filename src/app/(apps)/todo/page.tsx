"use client";

import * as React from "react";

import { Todo } from "@/types/tools";
import { TodoInput } from "@/components/todo-input";
import { TodoList } from "@/components/todo-list";

export default function Page() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  function AddTodo(t: Todo) {
    const data = [...todos, t];
    setTodos(data);
  }

  function UpdateTodo(id: Todo["id"]) {}

  function DeleteTodo(id: Todo["id"]) {}

  return (
    <main className="relative flex-1 w-full px-2">
      <section className="max-w-3xl mx-auto">
        <section className="sticky inset-x-0 mb-4 top-4">
          <TodoInput addTodo={AddTodo} />
        </section>
        <section>
          <TodoList todos={todos} deleteTodo={DeleteTodo} updateTodo={UpdateTodo} />
        </section>
      </section>
    </main>
  );
}
