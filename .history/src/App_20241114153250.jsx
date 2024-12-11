import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/learn/MyComponent'
import {SecondComponent} from "./components/learn/SecondComponent"
const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <div className="todo_container">
      <div className="todo_title">Todo List</div>
       <div>
        <input type=''
       </div>
    </div>
  )
}

export default App
