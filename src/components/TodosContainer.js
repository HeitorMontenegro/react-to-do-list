import TodoAdd from './TodoAdd'
import TodoFilter from './TodoFilter'
import TodoCell from './TodoCell'
import '../styles/TodosContainer.css'
import React, { useState } from 'react';

function TodosContainer ({todoList, setTodoList}){
    let [itemCategory, setCategory] = useState('default');
    
    return(            
        <div className="todos-container">
            <TodoAdd todoList={todoList} setTodoList={setTodoList}/>
            <TodoFilter itemCategory={itemCategory} setCategory={setCategory} todoList={todoList} setTodoList={setTodoList}/>
            {todoList.map((todo) => (
            (itemCategory === todo.category || itemCategory === "default") && <TodoCell key={todo.id} todoList={todoList} setTodoList={setTodoList} todoText={todo.text} todoId={todo.id} todoStatus={todo.tstatus} todoCategory={todo.category}/> 
                                    ))}
        </div>
    );
}

export default TodosContainer;