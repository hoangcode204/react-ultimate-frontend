const TodoData = (props) => {
    const { todoList } = props;
  
    return (
      <div className="todo-data">
        {todoList.map((item, index) => (
          <div key={item.id}>
            {index + 1}. {item.name}
          </div>
        ))}
      </div>
    );
  };
  
  export default TodoData;
  