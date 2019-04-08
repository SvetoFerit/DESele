import React, { Component } from "react";
import AddStudent from "./components/AddStudent";
import ShowStudents from "./components/ShowStudents";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/new" component={AddStudent} />
        <Route path="/home" component={ShowStudents} />
      </Switch>
    );
  }
}
export default App;
