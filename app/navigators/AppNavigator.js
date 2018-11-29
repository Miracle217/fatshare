import React from 'react';
import { connect } from 'react-redux';
import {
    StackNavigator,
    addNavigationHelpers
} from 'react-navigation';

import LoginScreen from '../scenes/login';
import ForgotPasswordScreen from '../scenes/forgotpassword';
import SignupScreen from '../scenes/signup';

export const AppNavigator = StackNavigator({
    login: { screen: LoginScreen },
    forgotpassword: { screen: ForgotPasswordScreen },
    signup: { screen: SignupScreen },
});

const AppWithNavigationState = ({dispatch, nav}) => (
    <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
);

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);