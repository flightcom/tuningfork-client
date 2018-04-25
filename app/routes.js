// @flow

import React from 'react';
import { Switch } from 'react-router-dom';

import { Container } from 'styles/common';

import ApplicationsPage from 'views/ApplicationsPage';
import BasicLayout from 'components/Layouts/BasicLayout';
import ForgotPasswordPage from 'views/ForgotPasswordPage';
import HomePage from 'views/HomePage';
import LoginPage from 'views/LoginPage';
import NotFound from 'views/NotFound';
import PasswordCreatePage from 'views/PasswordCreatePage';
import PasswordResetPage from 'views/PasswordResetPage';
import RegisterPage from 'views/RegisterPage';
import RouteWithLayout from 'components/RouteWithLayout';
import SettingsPage from 'views/SettingsPage';
import SideNavLayout from 'components/Layouts/SideNavLayout';

import type { LogoutUserType } from 'services/Authentication/thunks';
import type { ImmutableMap, UserType } from 'types';

type Props = {
    user: ?ImmutableMap<string, UserType>,
    locale: string,
    handleToggleLocale: () => void,
    onLogout: LogoutUserType,
};

function Routes(props: Props) {
    return (
        <Container>
            <Switch>
                <RouteWithLayout
                    path="/"
                    component={HomePage}
                    layout={BasicLayout}
                    exact
                    isPrivateRoute
                    {...props}
                />
                <RouteWithLayout
                    path="/login"
                    component={LoginPage}
                    layout={BasicLayout}
                    exact
                    {...props}
                />
                <RouteWithLayout
                    path="/register"
                    component={RegisterPage}
                    layout={BasicLayout}
                    exact
                    {...props}
                />
                <RouteWithLayout
                    path="/forgot-password"
                    component={ForgotPasswordPage}
                    layout={BasicLayout}
                    {...props}
                />
                <RouteWithLayout
                    path="/confirm/:token"
                    component={UserConfirm}
                    layout={BasicLayout}
                    {...props}
                />
                <RouteWithLayout
                    path="/password-reset/:token"
                    component={PasswordResetPage}
                    layout={BasicLayout}
                    {...props}
                />
                <RouteWithLayout
                    path="/password-reset/*"
                    component={ForgotPasswordPage}
                    layout={BasicLayout}
                    {...props}
                />
                <RouteWithLayout component={NotFound} layout={BasicLayout} {...props} />
            </Switch>
        </Container>
    );
}

export default Routes;
