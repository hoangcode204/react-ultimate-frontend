const TodoNew=(props)=>{
    // const valueInput="erick";
    const[valueInput,setValueInput]= useState("eric")

    const {addNewTodo} =props;
    // addNewTodo("erick")
    const handleClick=() =>{
       alert("call me")
    }
    const handleOnChange=(name)=>{
        console.log(">> handleOnChange",name)
        setValueInput
    }
    return(
        <div className='todo-new'>
        <input type="text"
            onChange={()=>handleOnChange(event.target.value)}
        />
        <button 
        style={{cursor: "pointer"}}
        onClick={handleClick}
        >
        Add</button>
        <div>
            My text input is ={valueInput}
        </div>
       </div>
    );
};
export default TodoNew