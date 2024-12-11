
import './App.css'
import  './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
const todoApp=()=>{
  
}
const App=()=> {
  
  return (
    <>
    <Header/>
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      {todoList.length>0 ?
       <TodoData todoList={todoList} deleteTodo={deleteTodo}/>
      :
          <div className='todo-image'>
          <img src={reactLogo}/>
       </div>
      }
    </div>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
