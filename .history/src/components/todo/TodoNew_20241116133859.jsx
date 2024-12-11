const TodoNew=(props)=>{
    console.log(">>> check poin: ",props);
    const { addNewTodo}  =props;
    addNewTodo("erick")
    const handleClick=() =>{
        alert
    }
    return(
        <div className='todo-new'>
        <input type="text"/>
        <button>Add</button>
       </div>
    )
}
export default TodoNew