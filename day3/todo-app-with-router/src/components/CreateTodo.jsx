import { useState } from "react";
import { createTodo } from "../services/TodoService";

export default function CreateTodo() {

    const [submitted, setSubmitted] = useState(false);
    const [todo, setTodo] = useState({
        id: null,
        task: null,
        completed: false
    })

    const handleSubmit = (e) => {
        const { name, value } = e.target;

        e.preventDefault();
        setTodo({ ...todo, [name]: value });
        setSubmitted(true);
        console.log(todo);

        createTodo(todo)
            .then(res => {
                console.log("Todo created successfully", res.data);
            })
            .catch(error => console.log("Error while creating todo", error));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="text" className="form-control" id="id" name="id"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">Title</label>
                    <input type="text" className="form-control" id="task" name="task" />
                </div>
                <div className="mb-3 form-check">
                    <label className="form-check-label" htmlFor="completed">Is Completed?</label>
                    <input type="checkbox" className="form-check-input" id="completed"
                        name="completed" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}