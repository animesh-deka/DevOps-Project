//import logo from './logo.svg';
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import SignUpC from "./SignUpC";
import SignUpH from "./SignUpH";
import LoginH from "./LoginH";
import userDashboard from "./userDashboard";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/LoginH" component={LoginH} />
        <Route exact path="/SignUpC" component={SignUpC} />
        <Route exact path="/SignUpH" component={SignUpH} />
        <Route exact path="/loggedin" component={userDashboard} />
      </Switch>
    </>
  );
}

export default App;
