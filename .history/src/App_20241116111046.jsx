
import './App.css'
import  './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'

const App=()=> {
  const hoidanit="Eric";
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew/>
       <TodoData/>
       <div className='todo-image'>
        <img src={reactLogo}/>
       </div>
    </div>
  )
}

export default App
