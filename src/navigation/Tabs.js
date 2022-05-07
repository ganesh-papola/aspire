
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTabs } from '../components';
import { Credit, DebitCard, Home, Payment, Profile } from '../containers';
import { strings } from '../constants';

const Tab = createBottomTabNavigator();
export default ({
}) => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} backBehavior='initialRoute' 
            tabBar={(props) => (<CustomTabs {...props} />)}>
            <Tab.Screen name={strings.tabs.home} component={DebitCard} />
            <Tab.Screen name={strings.tabs.debitCard} component={DebitCard} />
            <Tab.Screen name={strings.tabs.payments} component={Payment} />
            <Tab.Screen name={strings.tabs.credit} component={Credit} />
            <Tab.Screen name={strings.tabs.profile} component={Profile} />
        </Tab.Navigator>
    )
};


