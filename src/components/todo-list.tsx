import { Todo } from "@/types/tools";
import { TodoFactory } from "./todo-factory";

interface Props {
  todos: Todo[];
  deleteTodo: (id: Todo["id"]) => void;
  updateTodo: (id: Todo["id"]) => void;
}

export function TodoList({ todos, updateTodo, deleteTodo }: Props) {
  return (
    <>
      {todos.length > 0 ? (
        <div className="grid gap-4 mt-6">
          {todos.map((todo) => {
            return (
              <TodoFactory
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            );
          })}
        </div>
      ) : (
        <div className="mt-24 text-center">
          <p className="text-xl font-semibold tracking-tight text-muted-foreground">
            Empty &mdash; No todos
          </p>
        </div>
      )}
    </>
  );
}
