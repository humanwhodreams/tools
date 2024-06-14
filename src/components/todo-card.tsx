"use client";

import { Calendar, Edit, Trash2 } from "lucide-react";

import { Checkbox } from "./ui/checkbox";
import { Todo } from "@/types/tools";
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/helpers";
import { useState } from "react";

interface Props {
  todo: Todo;
  mode: (isEnabled: boolean) => void;
  actions?: {
    onEdit: (id: Todo["id"]) => void;
    onDelete: (id: Todo["id"]) => void;
  };
}

export function TodoCard({ todo, mode, actions }: Props) {
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.isCompleted);

  return (
    <article className="px-3 py-2 transition-colors rounded-md bg-background hover:bg-muted group">
      <div className="flex items-start gap-x-2">
        <div className="p-1">
          <Checkbox
            checked={todo.isCompleted || isCompleted}
            onCheckedChange={() => setIsCompleted((prev) => !prev)}
          />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between">
            <div className="flex-1 max-w-[300px] md:max-w-[560px]">
              <pre
                className={cn(
                  "font-sans text-wrap",
                  todo.isCompleted ||
                    (isCompleted && "line-through text-muted-foreground/50")
                )}
              >
                {todo.todo}
              </pre>
            </div>
            <div className="flex items-center ml-4 space-x-2">
              <span className="hidden md:items-center md:font-mono md:text-xs md:font-medium md:inline-flex md:text-muted-foreground md:bg-muted md:rounded-full md:px-2 md:py-1">
                <Calendar className="mr-2 size-3 group-hover:hidden" />
                {formatDate(todo.createdAt as string)}
              </span>
              <div className="lg:hidden lg:group-hover:block">
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
                    onClick={() => mode(true)}
                  >
                    <Edit className="transition-colors size-4 text-muted-foreground hover:text-foreground" />
                  </button>
                  <button
                    type="button"
                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
                    onClick={() => {
                      console.log("delete button clicked");
                    }}
                  >
                    <Trash2 className="transition-colors size-4 text-muted-foreground hover:text-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <span className="inline-flex items-center font-mono text-xs font-medium sm:hidden text-muted-foreground">
            <Calendar className="mr-2 size-3" />
            <span className="inline-block">
              {formatDate(todo.createdAt as string)}
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}
