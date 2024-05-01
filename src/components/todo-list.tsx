import { Inbox } from "lucide-react";
import { Todo } from "@/types/tools";
import { TodoCard } from "./todo-card";

interface Props {
  todos: Todo[];
}

export function TodoList({ todos }: Props) {
  return (
    <>
      {todos.length > 0 ? (
        <div className="grid gap-4 mt-6">
          {todos.map((todo, id) => {
            return <TodoCard key={id} todo={todo} />;
          })}
        </div>
      ) : (
        <EmptyState />
      )}
    </>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <Inbox className="w-10 h-10 text-muted-foreground" />
      <div className="mt-4 text-center">
        <p className="text-xl font-semibold tracking-tight scroll-m-20 text-muted-foreground">
          You currently have not made any todos yet
        </p>
      </div>
    </div>
  );
}
