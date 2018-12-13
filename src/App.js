import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./hoc/Layout/Layout";
import pages from "./data/pagesData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Layout>
            <Switch>
              {pages.map(page => (
                <Route
                  path={page.path}
                  component={page.component}
                  key={page.path}
                />
              ))}
              <Redirect to="/" />
            </Switch>
          </Layout>
        </Switch>
      </div>
    );
  }
}

export default App;
