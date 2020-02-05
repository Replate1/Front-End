import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink, BrowserRouter, Switch } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import Dashboard from "./components/Dashboard";
import { PrivateRoute } from "./components/PrivateRoute";
import Account from "./components/Account";
import Header from "./components/Header";
import "./App.css";


class App extends Component {
  render() {
    return (

      // Dashboard Start
    //   <ModelContextProvider>
    //     <ModalManager />
    //     <div className="App">
    //       <BrowserRouter>
    //         <Header />
    //         <Switch>
    //           <Route exact component={Dashboard} path="/" />
    //           <Route exact component={Account} path="/account" />
    //           <Route exact component={Contacts} path="/contacts" />
    //         </Switch>
    //       </BrowserRouter>
    //     </div>
    //   </ModelContextProvider>
    // );
   // Dashboard End
   
    
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm}></Route>
            <Route path="/sign-in" component={SignInForm}></Route>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;