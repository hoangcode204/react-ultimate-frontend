const TodoData=(props)=>{
    const {name, age}=props;
    return(
        <div className="todo-data">
           <div>My name is {name}, age {age}</div>

        <div>Learning React</div>
        <div>Watching Youtube</div>
        <div>
            {JSON.stringify(props.toDoList)}
        </div>
       </div>
    )
}
export default TodoData