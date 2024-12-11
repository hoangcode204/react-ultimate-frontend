const TodoData = (props) => {
    const { todoList, deleteTodo } = props;
  
    return (
      <div className="todo-data">
        {todoList.map((item, index) => (
          <div key={item.id} className="todo-item">
            <span>
              {index + 1}. {item.name}
            </span>
            <button
              onClick={() => deleteTodo(item.id)} // Xóa todo khi nhấn vào nút Delete
              style={{
                marginLeft: "10px",
                cursor: "pointer",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px"
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default TodoData;
  