"use client";

import * as React from "react";

import { Todo } from "@/types/tools";
import { TodoCard } from "./todo-card";
import { TodoEditForm } from "./todo-edit-form";

interface Props {
  todo: Todo;
  deleteTodo: (id: Todo["id"]) => void;
  updateTodo: (id: Todo["id"]) => void;
}

export function TodoFactory({ todo, deleteTodo, updateTodo }: Props) {
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  const handleEdit = (isEnabled: boolean) => {
    setIsEditMode(isEnabled);
  };

  return (
    <>
      {isEditMode ? (
        <TodoEditForm todo={todo} mode={handleEdit} />
      ) : (
        <TodoCard todo={todo} mode={handleEdit} />
      )}
    </>
  );
}
