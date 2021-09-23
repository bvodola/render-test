import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <Switch>
            <Route exact path="/">
              <div>
                <h1>Home</h1>
                <Link to="/about">About</Link>
              </div>
            </Route>
            <Route exact path="/about">
              <div>
                <h1>About</h1>
                <Link to="/">Home</Link>
              </div>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
