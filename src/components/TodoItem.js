import React from 'react'

class TodoItem extends React.Component {
    render () {
        const {id, title} = this.props.todo
        return (
            <div className={this.props.todo.completed ? 'todo-item completed' : 'todo-item incomplete'}>
                <input 
                    type='checkbox' 
                    onChange={this.props.markComplete.bind(this, id)}
                    defaultChecked={this.props.todo.completed}
                />
                <h3>{title}</h3>
                <button onClick={this.props.delTodo.bind(this, id)}>✕</button>
            </div>
        )
    }
}

export default TodoItem