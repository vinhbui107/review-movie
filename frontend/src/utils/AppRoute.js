import React, { Suspense } from "react";
import { Redirect, Route } from "react-router-dom";

import { AppLayout, PublicLayout } from "../layouts";
import { isLogin } from "./helpers";

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

export default AppRoute;
