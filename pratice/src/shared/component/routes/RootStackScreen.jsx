import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtpVerifyScreen from '../screens/auth/OtpVerifyScreen';
import SignIn from '../screens/auth/SignIn';
import TermsAndConditionScreen from '../screens/auth/TermsAndConditionScreen';
import { Header } from '@rneui/base';

const RouteStack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <RouteStack.Navigator screenOptions={
            {
                animation: 'slide_from_right',
                headerShown: false,
            }
        }>
            <RouteStack.Screen option={{headers:'false'}} name="SignIn" component={SignIn} />
        </RouteStack.Navigator>
    );
}
export default AuthNavigator
