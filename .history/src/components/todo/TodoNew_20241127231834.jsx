import { useState } from "react";

const TodoNew=(props)=>{
    // const valueInput="erick";
    const[valueInput,setValueInput] = useState("")

    const handleClick = () => {
        if (valueInput.trim() !== "") {
          addNewTodo(valueInput); // Gọi hàm addNewTodo
          setValueInput(""); // Xóa giá trị input sau khi thêm mới
        }
      };
    
      const handleOnChange = (event) => {
        setValueInput(event.target.value); // Truyền giá trị input vào state
      };
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