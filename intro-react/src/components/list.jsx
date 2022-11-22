import React from 'react'

function TodoList(props) {

    // Changing the done status of my object from False to true (and vice versa) to let react know if the task is done or not
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
        <div className="w-2/4 m-5 p-10 bg-white/20 rounded-xl">
            <h3 className="text-2xl font-light text-rose-200">Todo List : </h3>
            <ul className='pl-8 text-green-200'>
                {props.todos.map((todo) =>
                    <li key={todo.id} className={todo.done ? "line-through" : ""}>
                        <input
                            className='m-2'
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

// FIRST VERSION - Lisa 
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

