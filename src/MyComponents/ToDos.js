import React from 'react'
import ToDoItem from "./ToDoItem";


const ToDos = (props) => {
    let myStyle = {
        minHeight:'70vh',
        margin:"40px auto"
    }
    return (
        <div className='container ' style={myStyle}>
            <h3 className=' my-3'>ToDos List</h3>
            {props.todo.length===0?"No ToDos to display":props.todo.map((todo)=>{
                return (
                <>
                <ToDoItem todo={todo} key={todo.sn} onDelete={props.onDelete}/><hr/>
                </>
            )})}
            
            
        </div>
    )
}

export default ToDos
