import React, { useState } from 'react'

function ListItem(item) {
    const [unchecked, setundChecked] = useState(false);
    

    return ( <li className={unchecked ? "line-through" : ""}>
                <input
                    type="checkbox"
                    defaultChecked={unchecked}
                    onChange={() => setundChecked(!unchecked)}
                />
                {item.value}
            </li> 
    ); 

}

export default function List() {
    const Todos = ["My firts todo", "My second todo"];
    const [todos, setTodos] = useState(Todos);  

    const listItems = Todos.map((todo)=> (
        <ListItem key={todo.toString()} value={todo}/>
    ))

    return (
        <div className="ml-8 pt-8">
            <h3 className="text-left text-2xl font-bold">Todos</h3>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}