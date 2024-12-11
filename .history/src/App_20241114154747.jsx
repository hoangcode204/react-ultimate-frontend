
import './App.css'
import  './components/todo/todo.css'
import TodoNew from './components/todo/TodoNew'

const App=()=> {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew/>
       
    </div>
  )
}

export default App
