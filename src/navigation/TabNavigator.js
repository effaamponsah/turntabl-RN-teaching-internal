import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const TabNav = createMaterialBottomTabNavigator();
import Explore from '../screens/Explore';
import Categories from '../screens/Categories';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';
import ExploreStack from './ExploreStack';
const TabNavigator = () => {
    return (
        <TabNav.Navigator
            initialRouteName="Explore"
            shifting={true} //removes the title when the inactive ones
            barStyle={{ backgroundColor: '#fff' }}
        >
            <TabNav.Screen
                name="Explore"
                component={ExploreStack}
                options={{
                    tabBarIcon: 'compass-outline'
                }}
            />
            <TabNav.Screen
                name="Categories"
                component={Categories}
                options={{
                    tabBarIcon: 'book-outline'
                }}
            />
            <TabNav.Screen
                name="Notification"
                component={Notifications}
                options={{
                    tabBarIcon: 'bell-outline'
                }}
            />
            <TabNav.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: 'settings-outline'
                }}
            />
        </TabNav.Navigator>
    );
}

export default TabNavigator;