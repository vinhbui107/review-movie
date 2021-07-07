import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";

import { AppLayout } from "../layouts";
import { isLogin } from "./helpers";

const AppRoute = ({ component: Component, restricted, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            (isLogin() && restricted && <Redirect to="/" />) || (
                <AppLayout {...rest}>
                    <Suspense fallback={<div></div>}>
                        <Component {...props} />
                    </Suspense>
                </AppLayout>
            )
        }
    />
);

export default AppRoute;
