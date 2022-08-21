import React, { useState, useRef } from "react";
import { TodoList } from "./components/TodoList";
import { v4 as uuidv4 } from 'uuid';

export function App(){

    const [todos, setTodos] = useState(
        [{
            id: 1,
            task: "Tarea1",
            completed: false
        }])

    const todoTaskRef = useRef()
    const handleTodAdd = () => {
        const task = todoTaskRef.current.value

        if(task === "") return

        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), task, completetd: false}]
        })

        todoTaskRef.current.value = null
    }

    return (
        <React.Fragment>
            <TodoList todos={ todos } toggleTodo={toggleTodo}/>
            <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"></input>   
            <button onClick={handleTodAdd}>+</button>
            <button>-</button>
        </React.Fragment> 
    );
}