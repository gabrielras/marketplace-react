import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";
import Menu from "layouts/Menu.jsx"
import ShowProfile from "./components/screens/show_profiles/index.jsx";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/profiles/:id" render={props => <ShowProfile {...props} />} />
      <Route path="/profiles" render={props => <Menu {...props} />} />
      <Redirect from="/" to="/profiles" />
    </Switch>
  </BrowserRouter>
)
export default Routes;