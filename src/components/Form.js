import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import cn from 'classnames'

import './Form.css'

const initialState = {
  value: '',
}

class Form extends Component {
  state = initialState
  inputRef = React.createRef()

  handleSubmit = e => {
    e.preventDefault()
    if (this.isSubmitActive()) {
      this.props.todos.addTodo(this.state.value.trim())
      this.setState(initialState)
    } else {
      this.inputRef.current.focus()
    }
  }

  isSubmitActive = () => Boolean(this.state.value.trim())

  handleValueChange = e => this.setState({value: e.target.value})

  render() {
    const {value} = this.state
    return (
      <form noValidate className="Form" onSubmit={this.handleSubmit}>
        <div className="input-field">
          <input
            id="icon_prefix"
            className="white-text"
            name="value"
            type="text"
            value={value}
            ref={this.inputRef}
            onChange={this.handleValueChange}
          />
          <label htmlFor="icon_prefix">New task</label>
        </div>
        <button className={cn('btn-floating waves-effect waves-light', {pulse: this.isSubmitActive()})}>
          <i className="material-icons">add</i>
        </button>
      </form>
    )
  }
}

export default inject('todos')(observer(Form))
