import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { AuthProvider, useAuth } from './context/Auth.js'
import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";

const App = () => {
  const { user } = useAuth();

  return (
    <HashRouter>
      <Switch>
        <Route path="/auth" component={AuthLayout} />
        <Route path="/admin" render={() => (user ? <AdminLayout /> : <Redirect to="/auth/signin" />)} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </HashRouter>
  );
};

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
