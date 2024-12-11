import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <div className="todo_container">
      <div className="todo_title">Todo List</div>
       <div>
        <input type="text"/>
        <button>Add</button>
       </div>
       <div>
        <div>Learning React</div>
       </div>
    </div>
  )
}

export default App
