import { create } from "zustand";
import ITodo from "./types/ITodo";

interface TodoState {
  todos: ITodo[];
  addTodo: (todo: string) => void;
}

const useStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (title: string) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          title,
          completed: false,
        } as ITodo,
      ],
    }));
  },
}));

export default useStore;
