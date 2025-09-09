import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import ListTodos from "./components/ListTodos"
import CreateTodo from "./components/CreateTodo"
import ViewTodo from "./components/ViewTodo"

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Todos</Link>
            </li>
            <li>
              <Link to="/new">New Todo</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" Component={ListTodos} />
          <Route path="/list" Component={ListTodos} />
          <Route path="/new" Component={CreateTodo} />
          <Route path="/view/:id" Component={ViewTodo} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
