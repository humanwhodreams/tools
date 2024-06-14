"use client";

import * as React from "react";

import { CornerDownLeft } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";
import { Todo } from "@/types/tools";
import { generateUID } from "@/utils/helpers";

interface Props {
  addTodo: (t: Todo) => void;
}
export function TodoInput({ addTodo }: Props) {
  const [todo, setTodo] = React.useState<string>("");

  function handleOnClick() {
    try {
      if (todo.length >= 1) {
        addTodo({
          id: generateUID(),
          todo: todo,
          isCompleted: false,
          createdAt: new Date().toString(),
        });
        setTodo("");
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="flex items-start px-3 py-2 border rounded-md bg-muted">
      <div className="flex-1">
        <label htmlFor="todo" className="sr-only">Todo</label>
        <TextareaAutosize
          id="todo"
          name="todo"
          value={todo}
          onChange={(evt) => setTodo(evt.target.value)}
          autoComplete="off"
          autoFocus={true}
          required={true}
          placeholder="What are you working on?"
          className="w-full bg-transparent resize-none focus-visible:outline-none placeholder:text-muted-foreground max-h-40 scroll-bar scroll-bar-track scroll-bar-thumb"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center px-2 py-1 text-sm font-medium transition-colors rounded-md bg-muted focus-visible:outline-none hover:bg-background text-muted-foreground disabled:hover:bg-background/10 disabled:cursor-not-allowed"
        onClick={(e) => {
          e.preventDefault();
          handleOnClick();
        }}
        disabled={todo.length < 1 ? true : false}
      >
        <CornerDownLeft className="w-4 h-4 mr-2 text-muted-foreground" />
        ADD
      </button>
    </form>
  );
}
