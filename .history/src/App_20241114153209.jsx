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
      <div>Todo L</div>
    </div>
  )
}

export default App
