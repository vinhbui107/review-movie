import React, { Suspense, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import PublicLayout from "./layouts/PublicLayout";

import { routes } from "./pages/routes";
import { isLogin } from "./utils/helpers";

const AppRoute = ({ component: Component, isAppLayout, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAppLayout ? (
                <AppLayout {...rest}>
                    <Suspense fallback={<div></div>}>
                        <Component {...props} />
                    </Suspense>
                </AppLayout>
            ) : isLogin() ? (
                <Redirect to="/" />
            ) : (
                <PublicLayout {...rest}>
                    <Suspense fallback={<div></div>}>
                        <Component {...props} />
                    </Suspense>
                </PublicLayout>
            )
        }
    />
);

function App() {
    const showRoute = (routes) => {
        if (routes && routes.length > 0) {
            return routes.map((item, index) => {
                return (
                    <AppRoute
                        key={index}
                        exact={item.exact}
                        path={item.path}
                        component={item.component}
                        isAppLayout={item.isAppLayout}
                    />
                );
            });
        }
    };
    return (
        <Switch>
            {showRoute(routes)}
            <Redirect from="*" to="/404" />
        </Switch>
    );
}

export default App;
