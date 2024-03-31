import { ToDoItem } from "./ToDoItem"

export function ToDoList({ todos, toggleTodo, deleteTodo }){
  return ( 
     <ul className = "list">
    {todos.length === 0 && "No todos"}
    {todos.map(todo => {
      return (
        <ToDoItem
        {...todo}
        key = {todo.id} toggleTodo={todo.toggleTodo} deleteTodo={todo.deleteTodo}/>
 
      )
    })}
    </ul>
)}