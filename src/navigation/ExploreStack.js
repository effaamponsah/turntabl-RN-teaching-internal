import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Explore from '../screens/Explore';
import PopularServices from '../screens/PopularServices';
import Search from '../screens/Search';

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
                name="Popular"
                component={PopularServices}
            />
            <ExploreNav.Screen
                name="Search"
                component={Search}
               
            />
        </ExploreNav.Navigator>
    );
}

export default ExploreStack;