import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { Tabs } from '.';
import { strings } from '../constants';
import { WeeklyLimit } from '../containers';
const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName={strings.bottomTabs}>
      <Stack.Screen component={Tabs} name={strings.bottomTabs} options={{ headerShown: false }} />
      <Stack.Screen component={WeeklyLimit} name={strings.weeklyLimit} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
