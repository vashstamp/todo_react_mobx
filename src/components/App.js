import * as React from 'react'

import Form from './Form'
import List from './List'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <main className="App-Main">
        <h1 className="App-Title">Todo list</h1>
        <Form />
        <List todos={[]} checkTodo={() => undefined} deleteTodo={() => undefined} />
      </main>
    </div>
  )
}
