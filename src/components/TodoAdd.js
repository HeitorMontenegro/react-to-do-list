import '../styles/TodoAdd.css'

function TodoAdd({todoList, setTodoList}){
    
    const handleAdd = (e) => {
        e.preventDefault();
    
        let categoryInfo = e.target['categoryInfo'].value;
        let inputInfo = e.target['inputInfo'].value;

        if((categoryInfo === 'default') || (inputInfo === '')){
        window.alert('Please, enter valid input')
        } else {
        setTodoList([...todoList, {text: inputInfo, id:todoList.length+1, tstatus: false, category: categoryInfo}]);
        }

        e.target['inputInfo'].value='';
        e.target['categoryInfo'].value='default';

    }

    return(
        <form onSubmit={handleAdd} className="add-todo-container">
            <input type="text" name="inputInfo" placeholder="Next todo..." className="add-todo-input"></input>
            <div className="add-todo-btn-container">
                <button type="submit" className="add-todo-add-btn add-todo-btn">Add</button>
                <select className="add-todo-category-selector add-todo-btn" name="categoryInfo"> 
                    <option value="default">Category</option>
                    <option value="work">Work</option>
                    <option value="school">School</option>
                </select>
            </div>
        </form>
    );
};

export default TodoAdd;