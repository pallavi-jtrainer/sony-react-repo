
const Table = () => {
    let students = [
        { "id": 1, "name": "Prithvi", "email": "prithvi@ahah.c", "phone": "123456" },
        { "id": 2, "name": "Pranav", "email": "pranav@abab.c", "phone": "123467" },
        { "id": 3, "name": "Upasana", "email": "uppu@dkkd.c", "phone": "123789" },
        { "id": 4, "name": "Prasad", "email": "prasad@alal.c", "phone": "456789" },
    ];

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((s) => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.email}</td>
                                <td>{s.phone}</td>
                            </tr>
                        ))
                    }
                    {/* <tr>
                        <td>{students[0].id}</td>
                        <td>{students[0].name}</td>
                        <td>{students[0].email}</td>
                        <td>{students[0].phone}</td>
                    </tr>
                    <tr>
                        <td>{students[1].id}</td>
                        <td>{students[1].name}</td>
                        <td>{students[1].email}</td>
                        <td>{students[1].phone}</td>
                    </tr>
                    <tr>
                        <td>{students[2].id}</td>
                        <td>{students[2].name}</td>
                        <td>{students[2].email}</td>
                        <td>{students[2].phone}</td>
                    </tr>
                    <tr>
                        <td>{students[3].id}</td>
                        <td>{students[3].name}</td>
                        <td>{students[3].email}</td>
                        <td>{students[3].phone}</td>
                    </tr> */}
                </tbody>
            </table>
        </>
    )
}

export default Table;
