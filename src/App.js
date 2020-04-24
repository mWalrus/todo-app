import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './css/main.css'

import { v4 as uuidv4 } from 'uuid'
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

class App extends React.Component {

  constructor (props) {
    super(props)
    const adapter = new LocalStorage('entries')
    this.db = low(adapter)
    this.db.defaults({todos: []}).value()
    this.state = {
        todos: []
    }
  }

  componentDidMount () {
    this.setState({todos: this.db.get('todos').value()})
  }

  addTodo = (title)  => {
      const entry = {
          title,
          id: uuidv4(),
          completed: false
      }
      this.db.set("todos", [entry, ...this.db.get("todos").value()]).write()
      this.setState({todos: this.db.get("todos").value()})
  }

  delTodo = (id) => {
    console.log(id)
    this.db.get("todos").remove({id: id}).write()
    this.setState({todos: this.db.get("todos").value()})
  }

  markComplete = (id) => {
    const completed = this.db.get("todos").find({id}).value().completed
    this.db.get("todos").find({id}).assign({completed: !completed}).write()
    this.setState({todos: this.db.get("todos").value()})
  }
  
  render () {
    return (
      <Router>
        <Route exact path="/todo" render={props => (
          <div className="App">
          <header className="App-header">
            <h1>todo list</h1>
          </header>
          <div className='main-container'>
            <AddTodo addTodo={this.addTodo}/>
            <div className='todo-list'>
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </div>
          </div>
        </div>
        )}/>
      </Router>
    )
  }
}

export default App;
