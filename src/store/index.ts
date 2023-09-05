import { createContext } from "react";
import  TodoStore  from "./todos";

export const rootStoreContext = createContext({
  todoStore: TodoStore
});