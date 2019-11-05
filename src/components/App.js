import React from 'react'
import DevTools from 'mobx-react-devtools'
import {Provider} from 'mobx-react'

import todos from '../mobx/todos'
import Form from './Form'
import List from './List'
import './App.css'

const stores = {
  todos,
}

export default function App() {
  return (
    <>
      <DevTools />
      <Provider {...stores}>
        <div className="App">
          <main className="App-Main">
            <h1 className="App-Title">Todo list</h1>
            <Form />
            <List />
          </main>
        </div>
      </Provider>
    </>
  )
}
