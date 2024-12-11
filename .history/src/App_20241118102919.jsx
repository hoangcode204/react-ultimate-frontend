
import './App.css'
import  './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App=()=> {
  const [todoList,setTodoList]= useState()
  const hoidanit="Eric";
  const age=25;
  const data={
    address:"Hà Nội",
    country:"Việt Nam"
  }
  const addNewTodo=(name)=> {
    alert(`call me ${name}`)
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
          addNewTodo={addNewTodo}
      />
       <TodoData
        name={hoidanit}
        age={age}
        data={data}
      
       />
       <div className='todo-image'>
        <img src={reactLogo}/>
       </div>
    </div>
  )
}

export default App
