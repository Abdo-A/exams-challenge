import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Layout>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Redirect to="/" />
            </Switch>
          </Layout>
        </Switch>
      </div>
    );
  }
}

export default App;
