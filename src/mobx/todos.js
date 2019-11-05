import {decorate, observable, computed, action} from 'mobx'

const setLocalStorage = todos => {
  localStorage.todos = JSON.stringify(todos)
}

class TodosStore {
  tasks = localStorage.todos ? JSON.parse(localStorage.todos) : []

  get sortedTasks() {
    setLocalStorage(this.tasks)
    return [...this.tasks].sort((a, b) => (a.isDone === b.isDone ? 0 : a.isDone && !b.isDone ? 1 : -1))
  }

  addTodo(task) {
    const todo = {
      id: Date.now(),
      text: task,
    }
    this.tasks.push(todo)
  }

  checkTodo(id) {
    this.tasks.find(item => item.id === id).isDone = true
  }

  deleteTodo(id) {
    this.tasks = this.tasks.filter(item => item.id !== id)
  }
}

TodosStore = decorate(TodosStore, {
  tasks: observable,
  sortedTasks: computed,
  addTodo: action,
  checkTodo: action,
  deleteTodo: action,
})

export default new TodosStore()
