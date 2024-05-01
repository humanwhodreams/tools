"use client";

import {
  ArrowDownCircle,
  Calendar,
  CornerDownLeft,
  Edit,
  PlusCircle,
  Trash2,
} from "lucide-react";

import { Checkbox } from "./ui/checkbox";
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/helpers";
import { useState } from "react";

interface Props {
  todo: {
    id: string;
    title: string;
    note?: string;
    createdAt?: string;
    isCompleted: boolean;
  };
}

export function TodoCard({ todo }: Props) {
  const [toggleNote, setToggleNote] = useState<boolean>(false);
  return (
    <article className="px-3 py-2 transition-all duration-300 ease-in-out rounded-md bg-background hover:bg-muted group">
      <div className="flex items-start gap-x-2">
        <div className="p-1">
          <Checkbox checked={todo.isCompleted} />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex justify-between">
            <h1
              className={cn(
                "text-lg font-semibold",
                todo.isCompleted && "line-through text-muted-foreground/50"
              )}
            >
              {todo.title}
            </h1>
            <div className="flex items-center space-x-2">
              <span className="flex items-center px-2 py-1 font-mono text-sm font-medium rounded-full text-muted-foreground bg-muted">
                <Calendar className="mr-2 size-4" />
                {formatDate(todo.createdAt as string)}
              </span>
              <div className="lg:hidden lg:group-hover:block">
                <div className="flex items-center space-x-2">
                  <button type="button" className="focus-visible:outline-none">
                    <Edit className="transition-colors size-4 text-muted-foreground hover:text-foreground" />
                  </button>
                  <button type="button" className="focus-visible:outline-none">
                    <Trash2 className="transition-colors size-4 text-muted-foreground hover:text-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {todo.note ? (
            <p className="text-sm font-medium text-muted-foreground">
              {todo.note}
            </p>
          ) : (
            <>
              <button
                className="flex items-center justify-center text-sm font-medium transition-all rounded-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring focus-visible:ring-ring"
                onClick={() => setToggleNote((prev) => !prev)}
              >
                {toggleNote ? (
                  <ArrowDownCircle className="mr-2 size-4" />
                ) : (
                  <PlusCircle className="mr-2 size-4" />
                )}
                Add note
              </button>
              <div
                className={cn(
                  "hidden",
                  toggleNote && "block transition-all ease-in-out"
                )}
              >
                <div className="flex flex-col items-start px-3 py-2 border rounded-md bg-background ">
                  <textarea
                    name="note"
                    id="note"
                    placeholder="Leave a note..."
                    className="w-full h-12 text-sm font-medium bg-transparent focus-visible:outline-none placeholder:text-muted-foreground"
                  ></textarea>
                  <div className="flex items-center space-x-2">
                    <button
                      className="inline-flex items-center justify-center px-2 py-1 text-sm font-medium transition-colors rounded-md bg-muted focus-visible:outline-none hover:bg-background text-muted-foreground"
                      onClick={() => setToggleNote((prev) => !prev)}
                    >
                      CANCEL
                    </button>
                    <button className="inline-flex items-center justify-center px-2 py-1 text-sm font-medium transition-colors rounded-md bg-muted focus-visible:outline-none hover:bg-background text-muted-foreground">
                      <CornerDownLeft className="w-4 h-4 mr-2 text-muted-foreground" />
                      SAVE
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
