
import './App.css'
import  './components/todo/todo.css'

const App=()=> {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
       <div className=''>
        <input type="text"/>
        <button>Add</button>
       </div>
       <div className="todo-data">
        <div>Learning React</div>
        <div>Watching Youtube</div>
       </div>
    </div>
  )
}

export default App
