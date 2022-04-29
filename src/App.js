import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import ToDos from "./MyComponents/ToDos";
import About from './MyComponents/About';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }
  const onDelete = (todo) => {
    console.log("this is onDelete", todo)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    console.log("i am adding the todo", title, desc)
    let sn;
    if (todos.length === 0) {
      sn = 0;
    }
    else {
      sn = todos[todos.length - 1].sn + 1;

    }

    const myToDo = {
      sn: sn,
      title: title,
      desc: desc
    }
    setTodos([...todos, myToDo]);
    console.log(myToDo);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])



  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <ToDos todo={todos} onDelete={onDelete} />
              </>
            )
          }}>

          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>

  );
}

export default App;
