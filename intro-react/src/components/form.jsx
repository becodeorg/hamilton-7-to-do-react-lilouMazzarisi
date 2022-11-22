import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form(props) {
    const inputTodo = useRef();

    function clickHandler() {
        const inputElement = inputTodo.current;
        // Initialising an object = the new todo item
        const addTodo = {
            title: inputElement.value,
            done: false,
            id: uuidv4(),
        }
        // Adding to do to the array todos and setting this new array
        const newList = JSON.parse(JSON.stringify(props.todos))
        newList.push(addTodo);
        props.setTodos(newList);
    }

    return (
        <div className="todoInput items-center flex flex-col p-8" >
            <input
                ref={inputTodo}
                type="text"
                placeholder="Add new Todo"
                className="rounded-md w-max p-1"
            />
            <button
                onClick={clickHandler}
                className="bg-orange-200 text-gra-800 rounded-md w-24 p-1 mt-2 cursor-pointer"
            >Add Todo</button>
        </div >
    );
}