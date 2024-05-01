"use client";

import { CornerDownLeft, Plus } from "lucide-react";

import { Todo } from "@/types/tools";
import { cn } from "@/lib/utils";
import { generateUID } from "@/utils/helpers";
import { useState } from "react";

interface Props {
  addTodo: (todo: Todo) => void;
}
export function TodoInput({ addTodo }: Props) {
  const [openNote, setOpenNote] = useState<boolean>(false);

  const [todo, setTodo] = useState<string>("");
  const [note, setNote] = useState<string>("");

  function handleOnClick() {
    try {
      addTodo({
        id: generateUID(),
        title: todo,
        note: note,
        isCompleted: false,
        createdAt: new Date().toString(),
      });
      setTodo("");
      setNote("");
      setOpenNote(false)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex items-start px-3 py-2 border rounded-md bg-muted">
        <div className="flex-1">
          <input
            id="todo"
            name="todo"
            type="text"
            autoComplete="off"
            autoFocus={true}
            placeholder="What are you working on?"
            className={cn(
              "w-full bg-transparent focus-visible:outline-none placeholder:text-muted-foreground",
              openNote && "pb-2 font-medium"
            )}
            value={todo}
            onChange={(evt) => {
              setTodo(evt.target.value);
            }}
            required={true}
            minLength={2}
          />
          {openNote && (
            <div className="flex flex-col items-start px-3 py-2 border rounded-md bg-background ">
              <textarea
                name="note"
                id="note"
                placeholder="Leave a note..."
                className="w-full h-16 text-sm font-medium bg-transparent focus-visible:outline-none placeholder:text-muted-foreground"
                value={note}
                onChange={(evt) => {
                  setNote(evt.target.value);
                }}
              ></textarea>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center px-2 py-1 text-sm font-medium transition-colors rounded-md bg-muted focus-visible:outline-none hover:bg-background text-muted-foreground"
                  onClick={() => setOpenNote((prev) => !prev)}
                >
                  CANCEL
                </button>
              </div>
            </div>
          )}
        </div>
        <button
          type="button"
          className="flex items-center justify-center px-2 py-1 text-sm font-medium transition-colors rounded-md bg-muted focus-visible:outline-none hover:bg-background text-muted-foreground"
          onClick={() => {
            console.log("enter has been clicked");
            handleOnClick();
          }}
        >
          <CornerDownLeft className="w-4 h-4 mr-2 text-muted-foreground" />
          ADD
        </button>
      </div>
      {!openNote && (
        <button
          type="button"
          className="flex items-center hover:text-foreground text-xs text-muted-foreground p-0.5"
          onClick={() => setOpenNote((prev) => !prev)}
        >
          <Plus className="mr-2 size-4" /> Add note
        </button>
      )}
    </>
  );
}
