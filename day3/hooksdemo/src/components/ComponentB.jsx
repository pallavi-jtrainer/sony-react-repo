import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
// export default function ComponentB(props) {
//     return (
//         <div>
//             {props.name}
//         </div>
//     )
// }

export default function ComponentB() {

    // const username = useContext(UserContext);
    // const user = useContext(UserContext);
    const users = useContext(UserContext);
    return (
        <div>
            {/* <p>Information from App.jsx using context: {username}</p> */}

            {/* <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Location: {user.location}</p> */}

            <h2>List of Users</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.username}</td>
                            <td>{u.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}