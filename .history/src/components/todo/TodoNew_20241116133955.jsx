const TodoNew=(props)=>{
    console.log(">>> check poin: ",props);
    const { addNewTodo}  =props;
    // addNewTodo("erick")
    const handleClick=() =>{
        alert("Click me")
    }
    return(
        <div className='todo-new'>
        <input type="text"/>
        <button style={{cursor}}>Add</button>
       </div>
    )
}
export default TodoNew