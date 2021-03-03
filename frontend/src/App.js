import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./pages/routes";
import { isLogin } from "./services/user";
import AppLayout from "./layouts/AppLayout";
import PublicLayout from "./layouts/PublicLayout";

const AppRoute = ({ component: Component, isAppLayout, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAppLayout ? (
                <AppLayout {...rest}>
                    <Component {...props} />
                </AppLayout>
            ) : isLogin() ? (
                <Redirect to="/" />
            ) : (
                <PublicLayout {...rest}>
                    <Component {...props} />
                </PublicLayout>
            )
        }
    />
);

function App() {
    const showItem = (routes) => {
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
        <Suspense fallback={<div>Loading</div>}>
            <Switch>
                {showItem(routes)}
                <Redirect from="*" to="/404" />
            </Switch>
        </Suspense>
    );
}

export default App;
