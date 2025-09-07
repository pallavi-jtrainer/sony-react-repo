import { useState, useEffect } from "react";
import { listEmployees, updateEmployee, createEmployee, deleteEmployee } from "../services/EmployeeService"

export default function EmployeesOps() {
    const [employees, setEmployees] = useState([]);
    const [form, setForm] = useState({ id: null, name: "", country: "", salary: "" });
    const [loading, setLoading] = useState(false);

    async function loadData() {
        setLoading(true);
        const res = await listEmployees();
        // console.log(res)
        setEmployees(res.data);
        setLoading(false);
    }

    useEffect(() => { loadData(); }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        if (form.id) {
            await updateEmployee(form.id, form);
        } else {
            await createEmployee(form);
        }
        setForm({ id: null, name: "", country: "", salary: "" });
        loadData();
    }

    async function handleDelete(id) {
        if (!window.confirm("Delete this employee?")) return;
        await deleteEmployee(id);
        loadData();
    }

    function handleEdit(emp) {
        setForm(emp);
    }

    return (
        <div className="container" style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}>
            <h4>CRUD API for Employees</h4>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "8px", marginBottom: "20px" }}>
                <input
                    placeholder="Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                />
                <input
                    placeholder="Country"
                    value={form.country}
                    onChange={e => setForm({ ...form, country: e.target.value })}
                    required
                />
                <input
                    placeholder="Salary"
                    value={form.salary}
                    onChange={e => setForm({ ...form, salary: e.target.value })}
                />
                <button type="submit">
                    {form.id ? "Update Employee" : "Add New Employee"}
                </button>
                {form.id && <button onClick={() => setForm({ id: null, name: "", country: "", salary: "" })}>Cancel</button>}
            </form>

            {/* Users List */}
            {loading ? <p>Loading...</p> : (
                <table className="table table-striped" cellPadding="6" style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr className="table-dark text-white">
                            <th>ID</th><th>Name</th><th>Country</th><th>Salary</th><th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(u => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.country}</td>
                                <td>{u.salary}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={() => handleEdit(u)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(u.id)} style={{ marginLeft: "8px" }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}