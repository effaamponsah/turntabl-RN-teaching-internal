import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Explore from '../screens/Explore';
import Settings from '../screens/Settings';

const ExploreNav = createStackNavigator();

const ExploreStack = ({ ...props }) => {
    return (
        <ExploreNav.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <ExploreNav.Screen
                name="Explore"
                component={Explore}
                options={{
                    title: 'Explore'
                }}
            />
            <ExploreNav.Screen
                name="Setting"
                component={Settings}
                options={{
                    title: 'Setting'
                }}
            />
        </ExploreNav.Navigator>
    );
}

export default ExploreStack;