import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../../../services/user";

const PrivateRoute = ({ component: Component, template: Template, ...rest }) => (
  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /signin page
  <Route
    {...rest}
    render={(props) =>
      isLogin() ? (
        <Template {...rest}>
          <Component {...props} />
        </Template>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
