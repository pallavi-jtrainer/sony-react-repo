import { useEffect, useState } from 'react';
import { getAllTodos } from '../services/TodoService';

export default function ListTodos() {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTodos = async () => {
        setLoading(true);
        try {
            const response = await getAllTodos();
            setTodos(response.data)
        } catch (error) {
            console.log("Error while fetching todos", error);
        }
    }

    useEffect(() => {
        fetchTodos();
        setLoading(false)
    }, [])

    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Is Completed?</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? <tr><td colSpan={4}>Loading...</td></tr> : todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.task}</td>
                            <td>{todo.completed ? "Yes" : "No"}</td>
                            <td>
                                <a href={`/view/${todo.id}`}>View Details</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}