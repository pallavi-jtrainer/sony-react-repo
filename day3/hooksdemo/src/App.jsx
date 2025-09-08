// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useEffect, useState } from 'react'
import './App.css'
import ComponentA from './components/ComponentA'
import ErrorBoundaryDemo from './components/ErrorBoundaryDemo'
import ProblemComponent from './components/ProblemComponent'
import UseRefDemo from './components/UseRefDemo'
import { UserContext } from './utils/UserContext'

function App() {

  // const [username, setUsername] = useState("Sri");
  // const [user, setUser] = useState({
  //   name: "Sri",
  //   age: 30,
  //   location: "Bangalore"
  // })

  // const [users, setUsers] = useState([])

  // const fetchUsers = () => {
  //   //api call
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => setUsers(data))
  //     .catch(error => console.error('Error fetching users:', error));
  // }

  // useEffect(() => {
  //   fetchUsers();
  // }, [])

  return (
    <>
      {/* <UserContext.Provider value={users}>
        <div>
          {/* <ComponentA name="Sri/> */}
      {/*  <ComponentA />
        </div>
      </UserContext.Provider> */}
      {/* <UseRefDemo /> */}
      <ErrorBoundaryDemo>
        <ProblemComponent />
      </ErrorBoundaryDemo>

    </>
  )
}

export default App
