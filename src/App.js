import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import ToDos from "./MyComponents/ToDos";
import React , { useState } from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("this is onDelete",todo)
  
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))}

  const addTodo = (title, desc)=>{
    console.log("i am adding the todo",title,desc)
    let sn;
    if (todos.length==0){
      sn=0;
    }
    else{
       sn = todos[todos.length-1].sn +1;

    }
    
    const  myToDo= {
      sn:sn,
      title:title,
      desc:desc
    }
    setTodos([...todos,myToDo]);
    console.log(myToDo)
  }
  const [todos, setTodos] = useState( []);
  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo}/>
      <ToDos todo={todos} onDelete={onDelete}/>
      <Footer />
    </>

  );
}

export default App;
