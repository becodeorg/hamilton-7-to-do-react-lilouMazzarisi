import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form(props) {
    const inputTodo = useRef();

    function clickHandler() {
        const inputElement = inputTodo.current;

        const addTodo = {
            title: inputElement.value,
            done: false,
            id: uuidv4(),
        }

        const newList = JSON.parse(JSON.stringify(props.todos))
        newList.push(addTodo);
        props.setTodos(newList);
    }

    return (
        <div className="todoInput line flex flex-col ml-8 pt-8 pb-5" >
            <input
                ref={inputTodo}
                type="text"
                placeholder="Enlist a new Todo"
                className="bg-gray-100 border border-solid border-gray-300 rounded-md w-max p-1"
            />
            <button
                onClick={clickHandler}
                className="bg-blue-500 text-white rounded-md w-24 p-1 mt-2 cursor-pointer"
            >Add Todo</button>
        </div>
    );
}