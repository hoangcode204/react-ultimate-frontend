
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
  const [todoList,setTodoList]= useState(
    [
      {id:1,name:"Learning React"},
      {id:2,name:"Watching youtube"}
    ]
  )
  const addNewTodo=(name)=> {
    const newTodo= {
      id:randomIntFromInterval(1,1000000),
      name:name
    }
    setTodoList([...todoList,newTodo])
  }
  const deleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList); // Cập nhật danh sách sau khi xóa
  };
  const randomIntFromInterval=(min, max)=> { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return (

    )
}
const App=()=> {
  
  return (
    <>
    <Header/>
 
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
