import { ITodo } from "./index";

class TodoEvent {

    private static instance: TodoEvent;
    private todoData: ITodo[] = [];

    public static create() {
        if (!TodoEvent.instance) {
            TodoEvent.instance = new TodoEvent();
        }
        return TodoEvent.instance;
    }

    public addTodo(todo: ITodo): Promise<ITodo> {
        // @ts-ignore
        return new Promise((resolve, reject) => {
            // @ts-ignore
            const _todo: ITodo = this.todoData.find((t: ITodo) => t.content === todo.content);
            if (_todo) {
                alert("该项已存在");
                return reject(1001);
            }
            this.todoData.push(todo);
            resolve(todo);
        })
    }

    public removeTodo(id: number): Promise<number> {
        // @ts-ignore
        return new Promise((resolve, reject) => {
            this.todoData = this.todoData.filter((todo) => todo.id !== id);
            resolve(id);
        })
    }

    public toggleTodo(id: number): Promise<number> {
        // @ts-ignore
        return new Promise((resolve, reject) => {
            this.todoData = this.todoData.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                    resolve(id);
                }
                return todo;
            });
        })
    }
}

export default TodoEvent;
