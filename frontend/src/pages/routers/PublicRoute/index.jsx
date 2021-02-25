import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../../../services/user";

const PublicRoute = ({ component: Component, template: Template, title: Title, restricted, ...rest }) => (
  // restricted = false meaning public route
  // restricted = true meaning restricted route
  <Route
    {...rest}
    render={(props) =>
      isLogin() && restricted ? (
        <Redirect to="/" />
      ) : (
        <Template {...rest}>
          <Component {...props} />
        </Template>
      )
    }
  />
);

export default PublicRoute;
