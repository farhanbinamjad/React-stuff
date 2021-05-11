import React, {useState, useEffect} from 'react';
import './App.css';
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState(""); 
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]); 

  const filterHandler = () => {
    switch(status){
      case 'Completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'Incomplete':
        setFilteredTodos(todos.filter(todo => todo.completed === false)); 
        break;
      default:
        setFilteredTodos(todos);  
        break;
    }
  }
  return (
    <div className="to-do-App">
      <header>
      <h1>ToDoList</h1>
      </header>
      <ToDoForm setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <ToDoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App