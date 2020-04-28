import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Welcome from '../screens/Welcome';
import ResetPassword from '../screens/ResetPassword';
const Auth = createStackNavigator();
const AuthStack = () => {
    return (
        <Auth.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Auth.Screen
                name="Welome"
                component={Welcome}
                options={{
                    title: 'Welcome',
                    // headerShown: false //takes away the header from there
                }}
            />
            <Auth.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'Login',
                    // headerShown: false //takes away the header from there
                }}
            />
            <Auth.Screen
                name="Register"
                component={Register}
                options={{
                    title: 'Register'
                }}
            />
            <Auth.Screen
                name="Reset"
                component={ResetPassword}
                options={{
                    title: 'Reset'
                }}
            />
        </Auth.Navigator>
    );
}

export default AuthStack;