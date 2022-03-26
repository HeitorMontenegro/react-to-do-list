import '../styles/TodoCell.css'

function TodoCell({todoList, setTodoList, todoText, todoId, todoStatus, todoCategory}){

    const handleDone = () =>{

        setTodoList(todoList.map((item) => {
            if (item.id === todoId){
            return{
            ...item, tstatus: !todoStatus
            };
        };

        return item;

    }));
        
}

const handleDelete = () =>{
 setTodoList(todoList.filter(item =>{

     return item.id !== todoId
     
 })
);
}

return(    

<div className={`todo-item ${todoStatus ? "todo-cell-completed" : ""}`}>
    <div className="todo-item-text">{todoText}</div>
    <div>{`Category: ${todoCategory}`}</div>
<div className="todo-item-btn-container">
    <button className="todo-item-btn done-btn" onClick={handleDone}>{`${todoStatus ? "Undo" : "Done"}`}</button>
    <button className="todo-item-btn del-btn" onClick={handleDelete}>Delete</button>
</div>
</div>
);
};

export default TodoCell;