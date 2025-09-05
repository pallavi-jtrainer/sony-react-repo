import { useState, useEffect } from "react"
// import axios from "axios";

// import http from "../http-common"
import getAllUsers from "../services/userService"

export default function ListUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = () => {
        // axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setUsers(res.data))

        // setUsers(info)

        // console.log(info)

        // http.get("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => setUsers(res.data))
        getAllUsers()
            .then((response) => setUsers(response.data));

        //console.log(res)
        // setUsers(res);
    }

    return (
        <>
            <div>
                {users.map((user) => (
                    <>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </>
                ))}
            </div>
        </>
    )
}