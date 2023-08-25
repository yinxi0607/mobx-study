import {observer} from "mobx-react";
import {ObservableTodoListStore} from "./store.ts";
import {FC} from "react";
import TodoView from "./TodoView.tsx";

type PropsType = {
    store: ObservableTodoListStore
}
const TodoList: FC<PropsType> = observer((props: PropsType) => {

    const {store} = props
    function newTodo(){
        const taskName = prompt("Task name")
        if (taskName){
            store.addTodo(taskName)
        }
    }
    function del(id: string){
        store.removeTodo(id)
    }
    return <>
        <p>TodoList by Mobx</p>
        <button onClick={newTodo}>New Todo</button>
        <ul>
            {store.todos.map(todo => {
                const {id} = todo
                return <TodoView todo={todo} key={id} del={del}/>
            })}
        </ul>
        <p>Done:{store.completedTodosCount}</p>
    </>
})

export default TodoList