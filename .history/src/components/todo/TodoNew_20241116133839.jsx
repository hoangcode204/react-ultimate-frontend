const TodoNew=(props)=>{
    console.log(">>> check poin: ",props);
    const { addNewTodo}  =props;
    addNewTodo("erick")
    const
    return(
        <div className='todo-new'>
        <input type="text"/>
        <button>Add</button>
       </div>
    )
}
export default TodoNew