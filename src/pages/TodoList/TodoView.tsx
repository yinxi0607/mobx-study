import {FC} from "react";
import {observer} from "mobx-react";
import {ObservableTodoStore} from "./store.ts";

type PropsType = {
    todo: ObservableTodoStore,
    del: (id: string) => void
}

const TodoView: FC<PropsType> = observer((props: PropsType) => {
    const {todo, del} = props

    function rename() {
        const newName = prompt('Task name', todo.task)
        if (newName) {
            todo.rename(newName)
        }
    }

    function toggleCompleted() {
        todo.toggleCompleted()
    }

    return <li onDoubleClick={rename}>
        <input type="checkbox" checked={todo.completed} onChange={toggleCompleted}/>
        <span style={{textDecoration: todo.completed ? "line-through" : ""}}>{todo.task}</span>
        <button onClick={() => del(todo.id)}>DELETE</button>
    </li>
})

export default TodoView