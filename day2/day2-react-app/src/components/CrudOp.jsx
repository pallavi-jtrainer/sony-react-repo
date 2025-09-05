import { useState, useEffect } from "react"

export default function CrudOp() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
        // console.log(data)
        // getUserInfo()
    }, [])


    const fetchData = () => {
        fetch("/data/emp.json")
            .then((response) => response.json())
            .then((result) => {
                setData(result.Employees)
                console.log(result.Employees)

            })
        // console.log(emps)
        // setData(emps)
        //console.log("Data: ", data);
    }

    // const getUserInfo = () => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((res) => res.json())
    //         .then((result) => {
    //             setData(result)
    //         })
    // }

    return (
        <>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Country</td>
                            <td>Salary</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data ? data.map((info) => (

                            <tr>
                                <td>{info.id}</td>
                                <td>{info.name}</td>
                                <td>{info.country}</td>
                                <td>{info.salary}</td>
                            </tr>

                        )) :
                            <div>
                                <h2>Error. Unable to Load Data</h2>
                            </div>
                        }
                    </tbody>
                </table>

            </div>
        </>
    )
}