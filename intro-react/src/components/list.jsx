import React from 'react'

function TodoList(props) {

    const handleChange = (id) => {
        const newTodo = props.todos.map((todo) => {
            if (todo.id == id) {
                todo.done = !todo.done;
            }
            return todo;
        });
        props.setTodos(newTodo);

    }

    return (
        <div className="ml-8 pt-8">
            <h3 className="text-left text-2xl font-bold">Todos</h3>
            <ul>
                {props.todos.map((todo) =>
                    <li key={todo.id} className={todo.done ? "line-through" : ""}>
                        <input
                            type="checkbox"
                            id={todo.id}
                            onChange={() => {
                                handleChange(todo.id);
                            }}
                        />
                        {todo.title}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default TodoList;

// function ListItem(item) {
//     const [unchecked, setUnchecked] = useState(false);

//     return (<li className={unchecked ? "line-through" : ""}>
//         <input
//             type="checkbox"
//             defaultChecked={unchecked}
//             onChange={() => setUnchecked(!unchecked)}
//         />
//         {item.value}
//     </li>
//     );

// }

// export default function List() {
//     const Todos = ["My first todo", "My second todo", "Another todo", "Yet another todo", "todo", "to the loo"];
//     const [todos, setTodos] = useState(Todos);

//     const listItems = Todos.map((todo) => (
//         <ListItem key={todo.id} value={todo} />
//     ))

//     return (
//         <div className="ml-8 pt-8">
//             <h3 className="text-left text-2xl font-bold">Todos</h3>
//             <ul>
//                 {listItems}
//             </ul>
//         </div>
//     );
// }

