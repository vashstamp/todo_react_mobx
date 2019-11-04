import {decorate, observable, computed} from 'mobx'

class Store {
  tasks = [{id: 1, text: 'test', isDone: true}, {id: 2, text: 'test', isDone: false}]

  get sortedTasks() {
    return [...this.tasks].sort((a, b) => (a.isDone === b.isDone ? 0 : a.isDone && !b.isDone ? 1 : -1))
  }
}

Store = decorate(Store, {
  tasks: observable,
  sortedTasks: computed,
})

export default new Store()
