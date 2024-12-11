const TodoNew=(props)=>{
    console.log(">>> check poin: ",props);
    const {addNewTodo} =props;
    // addNewTodo("erick")
    const handleClick=() =>{
       alert("call me")
    }
    const handleOnChange=(name)=>{
        console.log(">> handleOnChange",name)
    }
    return(
        <div className='todo-new'>
        <input type="text"
            onChange={()=>handleOnChange(eve)}
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