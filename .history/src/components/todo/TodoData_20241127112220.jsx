const TodoData=(props)=>{
    const { todoList } =props;

    console.log(">> check props: ",todoList)
    return(
        <div className="todo-data">
        {
            todoList.map((item,index)=>{
             console.log(">> check map: ",item,index)
             return (<div></div>)
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