function TodoFilter ({ todoList, setTodoList, itemCategory, setCategory }){

    function handleSubmitFilter (e) {
        setCategory(e.target.value);
    }

    return (
        <select onChange={ handleSubmitFilter }>
            <option value="default"> All </option>
            <option value="work"> Work </option>
            <option value="school"> School </option>
        </select>
    );
}

export default TodoFilter;