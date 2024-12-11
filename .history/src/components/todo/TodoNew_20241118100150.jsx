const TodoNew=(props)=>{
    console.log(">>> check poin: ",props);
    const {addNewTodo} =props;
    // addNewTodo("erick")
    const handleClick=() =>{
       alert("call me")
    }
    const handleOnChange=(event)=>{
        console.log(">> handleOnChange",event.target.value)
    }
    return(
        <div className='todo-new'>
        <input type="text"
            onChange={ha}
        />
        <button 
        style={{cursor: "pointer"}}
        onClick={handleClick}
        >
        Add</button>
       </div>
    );
};
export default TodoNew