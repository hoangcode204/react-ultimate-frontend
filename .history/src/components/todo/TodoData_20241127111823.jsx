const TodoData=(props)=>{
    const { todoList } =props;

    console.log(">> check props: ",todoList)
    return(
        <div className="todo-data">
        {
            todoList.map(()=>{
                return (<)
            })
        }
        <div>Learning React</div>
        <div>Watching Youtube</div>
        <div>
            {JSON.stringify(props.todoList)}
        </div>
       </div>
    )
}
export default TodoData