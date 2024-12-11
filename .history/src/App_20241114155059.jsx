
import './App.css'
import  './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'

const App=()=> {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew/>
       <TodoData/>
       <div className='todo-image'>
        <img src='./asset/react.svg'/>
       </div>
    </div>
  )
}

export default App
