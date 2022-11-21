import React, { useState } from 'react'

function ListItem(item) {
    const [unchecked, setUnchecked] = useState(false);

    return (<li className={unchecked ? "line-through" : ""}>
        <input
            type="checkbox"
            defaultChecked={unchecked}
            onChange={() => setUnchecked(!unchecked)}
        />
        {item.value}
    </li>
    );

}

export default function List() {
    const Todos = ["My first todo", "My second todo", "Another todo", "Yet another todo", "todo", "to the loo"];
    const [todos, setTodos] = useState(Todos);

    const listItems = Todos.map((todo) => (
        <ListItem key={todo.toString()} value={todo} />
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