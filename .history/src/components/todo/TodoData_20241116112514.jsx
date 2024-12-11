const TodoData=(props)=>{
    const{name,age}
    console.log(">>check props: ", props)
    return(
        <div className="todo-data">
        <div>Learning React</div>
        <div>Watching Youtube</div>
       </div>
    )
}
export default TodoData