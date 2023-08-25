import {nanoid} from "nanoid";
import {action, computed, makeObservable, observable} from "mobx";

export class ObservableTodoStore {
    id = ''
    task = ''
    completed = false

    constructor(task: string) {
        makeObservable(this, {
            id: observable,
            task: observable,
            completed: observable,
            rename: action,
            toggleCompleted: action
        })
        this.id = nanoid(5)
        this.task = task
    }

    rename(newName: string) {
        this.task = newName
    }

    toggleCompleted() {
        this.completed = !this.completed
    }
}

export class ObservableTodoListStore {
    todos: ObservableTodoStore[] = []

    constructor() {
        makeObservable(this, {
            todos: observable,
            completedTodosCount: computed,
            addTodo: action,
            removeTodo: action
        })
    }

    //get 用于计算，不用于修改，获取已经完成的todos数量
    get completedTodosCount() {
        return this.todos.filter(todo => todo.completed).length
    }

    addTodo(task: string) {
        const newTodo = new ObservableTodoStore(task)
        this.todos.push(newTodo) //声明式，像vue
    }

    removeTodo(id: string) {
        const index = this.todos.findIndex(todo => todo.id === id)
        this.todos.splice(index, 1)
    }
}

const store = new ObservableTodoListStore()
export default store