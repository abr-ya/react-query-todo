import { useQuery } from "react-query"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

import { getTodos } from "../../api/todosApi"

const TodoList = () => {
    const { isLoading, isError, error, data: todos } = useQuery('todos', getTodos, {
        select: data => data.sort((a, b) => b.id - a.id)
    })

    const toggleHandler = (todo) => {
        console.log('Toggle todo', todo);
    }

    const deleteHandler = (todo) => {
        console.log('Delete todo', todo);
    }

    const getBody = () => {
        if (isLoading) return <p>Loading...</p>;
        if (isError) return <p>{error.message}</p>;

        return (todos.map((todo) => (
            <article key={todo.id}>
                <div className="todo">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        id={todo.id}
                        onChange={() => toggleHandler(todo)}
                    />
                    <label htmlFor={todo.id}>{todo.title}</label>
                </div>
                <button className="trash" onClick={() => deleteHandler(todo)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </article>
        )));
    }

    return (
        <main>
            <h1>Todo List</h1>
            {getBody()}
        </main>
    )
}

export default TodoList;
