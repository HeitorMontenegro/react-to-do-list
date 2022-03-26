import TodosContainer from "./components/TodosContainer";
import React, { useState } from 'react';

function App() {

  let [todoList, setTodoList] = useState([]);


  return (
    <div>
      <TodosContainer todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
