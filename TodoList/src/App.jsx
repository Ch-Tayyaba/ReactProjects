import AddTodo from "../../TodoList/Components/AddTodo";
import AppName from "../../TodoList/Components/AppName";
import TodoItem1 from "../../TodoList/Components/TodoItem1";
import TodoItem2 from "../../TodoList/Components/TodoItem2";


function App() {

  return (
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <div className='item-container'>
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
        </div>
      </center>
  )
}

export default App;
