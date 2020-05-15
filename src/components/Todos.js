import React from 'react'

import TodoItem from './TodoItem'

class Todos extends React.Component {
    render () {
        if (this.props.todos !== undefined) {
            return (
                this.props.todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
                ))
            )
        } else {
            return (
                <p>Todo list is empty</p>
            )
        }
    }
}

export default Todos