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

function App() {
  return (
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
          <Route path="/properties/:propertyId" exact>
            <UpdatePropertiesPage />
          </Route>
          <Route path="/properties/description/:slug" exact>
            <PropertyDescription />
          </Route>
          <Route path="/users">
            <UsersPage />
          </Route>
          <Route path="/users/:userId">
            <SingleUser />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
