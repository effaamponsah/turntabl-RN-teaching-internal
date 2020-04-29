import React, { useState, useEffect, useReducer, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack';
import { AsyncStorage } from 'react-native';
import { AuthContext } from '../helpers/AuthContext';
import AuthLoading from '../screens/AuthLoading';
import { Snackbar } from 'react-native-paper';
const RootNavigator = () => {

    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState, //not really important for our use case right now
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    )

    useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };

        bootstrapAsync();
    }, []);

    const authContext = useMemo(
        () => ({
            signIn: async data => {
                // In a production app, we need to send some data (usually username, password) to server and get a token
                // We will also need to handle errors if sign in failed
                // After getting token, we need to persist the token using `AsyncStorage`
                // In the example, we'll use a dummy token

                try {
                    await AsyncStorage.setItem('userToken', 'dummy-auth-token');
                    dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
                } catch (error) {
                    // Error saving data
                }

            },
            // signOut: () => dispatch({ type: 'SIGN_OUT' }),
            signOut: async () => {
                try {
                    await AsyncStorage.clear();
                    dispatch({ type: 'SIGN_OUT' })
                } catch (error) {
                    // Error saving data
                }
            },
            signUp: async data => {
                // In a production app, we need to send user data to server and get a token
                // We will also need to handle errors if sign up failed
                // After getting token, we need to persist the token using `AsyncStorage`
                // In the example, we'll use a dummy token

                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
            resetPass: async data => {
                // In a production app, we need to send user data to server and get a token
                // We will also need to handle errors if sign up failed
                // After getting token, we need to persist the token using `AsyncStorage`
                // In the example, we'll use a dummy token
                alert(JSON.stringify(data))

               
            },
        }),
        []
    );

    if (state.isLoading) {
        return (
            <AuthLoading />
        )
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {
                    state.userToken == null ?
                        <AuthStack /> :
                        <TabNavigator />
                }
                {/* {userToken == null ? */}
                {/* <ExploreStack /> */}
                {/* } */}
                {/* <TabNavigator /> */}
                {/* <AuthStack /> */}
                {/* <ExploreStack /> */}
            </NavigationContainer>
        </AuthContext.Provider>


    );
}

export default RootNavigator;