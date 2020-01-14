import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../containers/LoginScreen';
import HomeScreen from '../containers/HomeScreen';
import ProfileScreen from '../containers/ProfileScreen';

import TabBarIcon from '../components/TabBarIcon';

const TabNavigator = createBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: () => ({
                title: 'Home',
                tabBarIcon: ({ focused }) => 
                    <TabBarIcon
                        focused={focused}
                        name={
                        Platform.OS === 'ios'
                            ? `ios-information-circle${focused ? '' : '-outline'}`
                            : 'md-information-circle'
                        }
                    />,
            }),
        },
        ProfileScreen: {
            screen: ProfileScreen,
            navigationOptions: () => ({
                title: 'Profile',
                tabBarIcon: ({ focused }) => 
                    <TabBarIcon
                        focused={focused}
                        name={
                        Platform.OS === 'ios'
                            ? `ios-person${focused ? '' : '-outline'}`
                            : 'md-person'
                        }
                    />,
            }),
        },
    }
);

const PrimaryNavigation = createStackNavigator(
    {
        LoginScreen: { screen: LoginScreen },
        Tabs: { screen: TabNavigator },
    },
    {
        headerMode: 'none',
        initialRouteName: 'LoginScreen',
    },
);

export default createAppContainer(PrimaryNavigation);