const TodoData=(props)=>{
    const {name, age, data}=props;
    // console.log(">>check props: ", props)
    return(
        <div className="todo-data">
           <div>My name is {name}, age {age}</div>
           <div>Address: {data.address}, Country: {data.country}</div>
        <div>Learning React</div>
        <div>Watching Youtube</div>
       </div>
    )
}
export default TodoData