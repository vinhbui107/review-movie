import React from "react";
import { Redirect, Switch } from "react-router-dom";

import { routes } from "./pages/routes";
import AppRoute from "./utils/AppRoute";

function App() {
    const showRoute = (routes) => {
        if (routes && routes.length > 0) {
            return routes.map((item, index) => {
                return (
                    <AppRoute
                        key={index}
                        exact={item.exact}
                        restricted={item.restricted}
                        path={item.path}
                        component={item.component}
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
