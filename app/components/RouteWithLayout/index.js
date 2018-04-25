// @flow

import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';

// Component to be used for wrapping the views with layouts as applicable
const RouteWithLayout = ({ component: Component, layout: Layout, isPrivateRoute, ...props }: Object) => {
    // Build the layout wrapped component
    const ComponentWithLayout = (
        (matchProps: Object) =>
            (<Layout
                content={Component}
                {...matchProps}
            />)
    );

    // If it is a private route, keep the newly generated component under the protected route, otherwise just route as usual
    if (isPrivateRoute) {
        return (<PrivateRoute
            component={ComponentWithLayout}
            {...props}
        />);
    }

    return (<Route
        render={() => <ComponentWithLayout {...props} />}
    />);
};

export default RouteWithLayout;
