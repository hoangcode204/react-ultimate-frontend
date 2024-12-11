import { useState } from 'react'
import './App.css'
imp

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
