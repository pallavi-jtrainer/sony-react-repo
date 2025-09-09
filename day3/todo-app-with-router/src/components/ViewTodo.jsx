import { useEffect, useState } from "react";
import { getTodoById } from "../services/TodoService";
import { useParams } from "react-router-dom";

export default function ViewTodo() {

    const [todo, setTodo] = useState({});

    const id = useParams().id;

    const fetchTodo = () => {

        getTodoById(id).then((response) => {
            setTodo(response.data);
        }).catch((error) => { console.log("Error while fetching todo details", error) });
    }

    useEffect(() => {
        fetchTodo();
    })

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Id:</td>
                        <td>{todo.id}</td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{todo.task}</td>
                    </tr>
                    <tr>
                        <td>Completed:</td>
                        <td>{todo.completed ? "Yes" : "No"}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button className="btn btn-warning">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}