import React from 'react'
import {inject, observer} from 'mobx-react'
import cn from 'classnames'

import './List.css'

function List({todos}) {
  return (
    <ul className="List collection z-depth-5">
      {todos.sortedTasks.length ? (
        todos.sortedTasks.map(item => (
          <li key={item.id} className={cn('List-Item collection-item', {'List-Item_done': item.isDone})}>
            <p className="List-ItemText">{item.text}</p>
            <div className="List-ItemActions">
              <button
                type="button"
                className="btn-flat btn-small waves-effect"
                onClick={item.isDone ? () => todos.deleteTodo(item.id) : () => todos.checkTodo(item.id)}
              >
                <i className="material-icons">{item.isDone ? 'delete' : 'check'}</i>
              </button>
            </div>
          </li>
        ))
      ) : (
        <li className="collection-item center-align grey-text">No tasks</li>
      )}
    </ul>
  )
}

export default inject('todos')(observer(List))
