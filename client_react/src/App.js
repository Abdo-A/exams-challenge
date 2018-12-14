import React, { Component } from "react";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./hoc/Layout/Layout";
import pages from "./data/pagesData";
import RequireAuth from "./hoc/requireAuth/requireAuth";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <RequireAuth>
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
          </RequireAuth>
        </Switch>
      </div>
    );
  }
}

export default App;
