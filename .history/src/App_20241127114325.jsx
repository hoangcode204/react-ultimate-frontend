
import './App.css'
import  './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App=()=> {
  const [todoList,setTodoList]= useState(
    [
      {id:1,name:"Learning React"},
      {id:2,name:"Watching youtube"}
    ]
  )
  const hoidanit="Eric";
  const age=25;
  const data={
    address:"Hà Nội",
    country:"Việt Nam"
  }
  const addNewTodo=(name)=> {
    const newTodo= {
      id:3,
      name:name
    }
    setTodoList([...todoList])
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
         todoList={todoList}
       />
       <div className='todo-image'>
        <img src={reactLogo}/>
       </div>
    </div>
  )
}

export default App
