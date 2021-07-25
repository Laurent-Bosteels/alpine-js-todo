function todos() {
    return {
        todos: [{
            id: 1,
            title: 'Learn Alpine Basics',
            isComplete: false,
        }],
        todoTitle: '',
        todoId: 2,
        addTodo() {
            if (this.todoTitle.trim() === '') {
                return;
            }

            this.todos.push({
                id: this.todoId,
                title: this.todoTitle,
                isComplete: false,
            })

            this.todoId++;
            this.todoTitle = '';
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => id !== todo.id);
        }
    }
}