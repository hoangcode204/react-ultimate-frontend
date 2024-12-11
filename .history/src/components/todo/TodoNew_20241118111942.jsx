import { useState } from "react";

const TodoNew=(props)=>{
    // const valueInput="erick";
    const[valueInput,setValueInput] = useState("erick")

    const {addNewTodo} =props;
    // addNewTodo("erick")
    const handleClick=() =>{
         addNewTodo("erick")
      
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