const TodoNew=(props)=>{
    console.log(">>> check poin: ",props);
      
    // addNewTodo("erick")
    const handleClick=() =>{
       alert("call me")
    }
    const handleOnChange=(event)=>{
        console.log(">> handleOnChange",event.target.va)
    }
    return(
        <div className='todo-new'>
        <input type="text"/>
        <button 
        style={{cursor: "pointer"}}
        onClick={handleClick}
        >
        Add</button>
       </div>
    );
};
export default TodoNew