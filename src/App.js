import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import HomePage from "./properties/pages/HomePage";
import PropertiesPage from "./properties/pages/PropertiesPage";
import UpdatePropertiesPage from "./properties/pages/UpdatePropertiesPage";
import NewProperty from "./properties/pages/NewPropertyPage";
import UsersPage from "./user/pages/UsersPage";
import SingleUser from "./user/pages/SingleUserPage";
import PropertyDescription from "./properties/pages/PropertyDescriptionPage";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
// import Auth from "./user/pages/Auth";
import LoginPage from "./user/pages/LoginPage";
import SignupPage from "./user/pages/SignupPage";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  return (
    <AuthContext.Provider>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/properties" exact>
              <PropertiesPage />
            </Route>
            <Route path="/properties/new">
              <NewProperty />
            </Route>
            <Route
              path="/properties/:propertyId"
              exact
              component={UpdatePropertiesPage}
            />
            <Route
              path="/properties/description/:slug"
              exact
              component={PropertyDescription}
            />
            <Route path="/users">
              <UsersPage />
            </Route>
            <Route path="/users/:userId">
              <SingleUser />
            </Route>
            {/* <Route path="/auth" component={Auth} /> */}
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
