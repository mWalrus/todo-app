import React from 'react'

class AddTodo extends React.Component {

    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.title !== '') {
            this.props.addTodo(this.state.title)
            this.setState({title: ''})
        }
    }

    onChange = (e) => {this.setState({[e.target.name]: e.target.value})}

    render () {
        return (
            <form className='add-todo' onSubmit={this.onSubmit}>
                <input
                    type='text'
                    name='title'
                    placeholder='Enter a new todo'
                    value={this.state.title}
                    onChange={this.onChange}
                    className='text-field'
                ></input>
                <input
                    type='submit'
                    value='submit'
                    className='btn-submit'    
                ></input>
            </form>
        )
    }
}

export default AddTodo