import {useState} from "react"
import "./styles.css"

export default function App(){
  const [ newItem , setNewItem] = useState("sdfsds")
  return (
   <>
  <form className = "new-item-form">
    <div className = "form-row">
      <label htmlFor = "item">New Item</label>
      <input type = {newItem} onChange = {e => setNewItem(e.target.value)} id = "item"/>
    </div>
  <button className = "btn">Add</button>
  </form>
  <h1 className = "header" >To-Do list</h1>
  <ul className = "list">
  <li>
    <label>
      <input type = "checkbox"/>Item1
    </label>
    <button className = "btn btn-danger">Delete</button>
  </li>
  <li>
    <label>
      <input type = "checkbox"/>Item1
    </label>
    <button className = "btn btn-danger">Delete</button>
  </li>
  </ul>
  </>
  )
}