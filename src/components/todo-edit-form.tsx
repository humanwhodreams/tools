"use client";

import * as React from "react";

import TextareaAutosize from "react-textarea-autosize";
import { Todo } from "@/types/tools";

export function TodoEditForm({
  todo,
  mode,
}: {
  todo: Todo;
  mode: (isEnabled: boolean) => void;
}) {
  const [title, setTitle] = React.useState<string>("");

  return (
    <form action="#" className="px-3 py-2 border-2 rounded-md border-border">
      <label htmlFor="todo" className="sr-only">
        Todo
      </label>
      <TextareaAutosize
        id="todo"
        name="todo"
        autoComplete="off"
        autoFocus={true}
        required={true}
        placeholder="Update what we are working on?"
        className="w-full py-4 bg-transparent resize-none focus-visible:outline-none placeholder:text-muted-foreground max-h-40 scroll-bar scroll-bar-track scroll-bar-thumb"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="flex items-center justify-center px-2 py-1 text-sm font-medium transition-colors rounded-md focus-visible:outline-none hover:bg-muted focus-visible:ring focus-visible:ring-ring/30 text-muted-foreground disabled:hover:bg-background/10 disabled:cursor-not-allowed"
            onClick={() => mode(false)}
          >
            CANCEL
          </button>
          <button
            type="submit"
            className="flex items-center justify-center px-2 py-1 text-sm font-medium transition-colors rounded-md bg-muted focus-visible:outline-none focus-visible:ring focus-visible:ring-ring/30 hover:bg-background text-muted-foreground disabled:hover:bg-background/10 disabled:cursor-not-allowed"
          >
            SAVE
          </button>
        </div>

        <button
            type="submit"
            className="flex items-center justify-center px-2 py-1 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring focus-visible:ring-ring/30 hover:bg-muted text-muted-foreground disabled:hover:bg-background/10 disabled:cursor-not-allowed"
          >
            DELETE TODO
          </button>
      </div>
    </form>
  );
}
