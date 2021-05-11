import React from 'react';


const ToDoForm = ({setInputText, todos, setTodos, inputText, setStatus}) =>{
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {text:inputText, completed:false, id:Math.random()*1000}
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="toDo-input" />
            <button onClick={submitTodoHandler} className='toDoButton' type="submit">
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value = "all">All</option>
                    <option value ='Completed'>Completed</option>
                    <option value = "Incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    )
}
export default ToDoForm;