import React, {useState} from "react";

export function NewTodoForm({onSubmit}){
    props.onSubmit

    const [ newItem , setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        if(newItem === ""  )return
    
       props.onSubmit(newItem)
    
          setNewItem("")
      }
    
return (
    <form onSubmit = {handleSubmit} className = "new-item-form">
    <div className = "form-row">
      <label htmlFor = "item">New Item</label>
      <input
        type = {newItem}
        onChange = {e => setNewItem(e.target.value)}
        id = "item"/>
    </div>
  <button className = "btn">Add</button>
  </form>
)}