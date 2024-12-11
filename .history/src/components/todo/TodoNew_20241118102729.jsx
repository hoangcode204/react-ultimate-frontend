const TodoNew=(props)=>{
    // const valueInput="erick";
    const[valueInput,setValueInput] = us

    const {addNewTodo} =props;
    // addNewTodo("erick")
    const handleClick=() =>{
       console.log(">>check valueInput: ",valueInput);
    }
    const handleOnChange=(name)=>{
       
        setValueInput(name);
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