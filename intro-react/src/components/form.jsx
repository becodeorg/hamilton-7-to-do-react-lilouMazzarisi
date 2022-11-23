import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form(props) {
    const inputTodo = useRef();

    function clickHandler() {
        const inputElement = inputTodo.current;
        // Initialising an object = the new todo item
        const addTodo = {
            title: inputElement.value, //nom 
            done: false,
            id: uuidv4(),
        }
        // Adding to do to the array todos and setting this new array
        const newList = JSON.parse(JSON.stringify(props.todos))
        newList.push(addTodo);
        props.setTodos(newList);

        inputElement.value = "";
    }

    return (
        <div className="todoInput items-center flex flex-col p-8" >
            <input
                ref={inputTodo}
                type="text"
                placeholder="Add new Todo"
                className="rounded-md w-max p-1"
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        clickHandler();
                    }
                }}
            />
            <input
                type="submit"
                value="Add Todo"
                onClick={clickHandler}
                className="bg-orange-200 text-gra-800 rounded-md w-24 p-1 mt-2 cursor-pointer"
            />
        </div >
    );
}