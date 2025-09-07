import { useState, useEffect } from "react"

export default function CrudOp() {
  const [data, setData] = useState([])

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [salary, setSalary] = useState("");

  const [btnText, setBtnText] = useState("Submit");

  const [enabled, setEnabled] = useState(false);

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

  const resetForm = () => {
    setId("");
    setName("");
    setCountry("");
    setSalary("");
  }

  const updateRecord = (item) => {
    setId(item.id)
    setName(item.name)
    setCountry(item.country)
    setSalary(item.salary)
    setBtnText("Update")
    setEnabled(true)
  }

  const registerRecord = (e) => {
    e.preventDefault();

    if (btnText === "Submit") {
      fetch("/data/emp.json", {
        method: 'POST',
        body: JSON.stringify({
          id: id,
          name: name,
          country: country,
          salary: salary
        }),
        headers: {
          'Content-type': 'application/json'
        }
      }).then((response) => response.json())
        .then((result) => {
          console.log(result)
          alert("Record Inserted")
          fetchData()
          resetForm()
        })
    }
    else {
      fetch("/data/emp.json" + id, {
        method: 'PUT',
        body: JSON.stringify({
          name: name,
          country: country,
          salary: salary
        }),
        headers: {
          'Content-type': 'application/json'
        }
      }).then((response) => response.json())
        .then((result) => {
          console.log(result)
          alert("Record Updated")
          fetchData()
          resetForm()
          setBtnText("Submit")
          setEnabled(false)
        })
    }
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
      <div style={{ width: '40%', float: 'left', marginLeft: '10%' }}>
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Country</th>
              <th>Salary</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data ? data.map((item, index) =>
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.country}</td>
                <td>{item.salary}</td>
                <td>
                  <button className="btn btn-warning"
                    onClick={() => { updateRecord(item) }}>
                    Edit
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
      <div style={{ float: 'down', width: '80%', marginRight: '54px' }}>
        <form onSubmit={registerRecord}>
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th colSpan={2}>
                  <center>Employee Registration Form</center>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>ID: </b></td>
                <td>
                  <input type="number" value={id} id="id"
                    name="id" className="form-control"
                    onChange={(e) => setId(e.target.value)}
                    disabled={enabled} />
                </td>
              </tr>
              <tr>
                <td><b>NAME: </b></td>
                <td>
                  <input type="text" value={name} id="name"
                    name="name" className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    disabled={enabled} />
                </td>
              </tr>
              <tr>
                <td><b>COUNTRY: </b></td>
                <td>
                  <select name="country" className="form-control"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}>
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="US">US</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td><b>SALARY: </b></td>
                <td>
                  <input type="number" value={salary} id="salary"
                    name="salary" className="form-control"
                    onChange={(e) => setSalary(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button className="btn btn-success" type="submit">{btnText}</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
}