import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

import './App.css'

const App = () => (
  <div className="AppContainer">
    <h1>My Todo List</h1>
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </div>
)

export default App
