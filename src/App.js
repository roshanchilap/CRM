import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home">
            <Redirect to="/" />
          </Route>
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
