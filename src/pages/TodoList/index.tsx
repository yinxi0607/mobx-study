import {FC} from "react";
import TodoList from "./TodoList.tsx";
import store from "./store.ts";

const TodoListDemo: FC = () => {
    return <>
        <TodoList store={store}/>
    </>
}

export default TodoListDemo