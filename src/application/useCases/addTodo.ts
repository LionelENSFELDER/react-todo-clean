export class addTodo {
    constructor(private todoRepository: any) { }
    async execute(todo: any) {
        this.todoRepository.add(todo);
    }
}