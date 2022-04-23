import React from 'react'
import ToDoItem from "./ToDoItem";


const ToDos = (props) => {
    return (
        <div className='container'>
            <h3 className=' my-3'>ToDos List</h3>
            {props.todo.length===0?"No ToDos to display":props.todo.map((todo)=>{
                return <ToDoItem todo={todo} key={todo.sn} onDelete={props.onDelete}/>
            })}
            
            
        </div>
    )
}

export default ToDos
