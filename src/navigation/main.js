import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          options={{title: 'Unsplash'}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Detail"
          options={{title: 'Detail'}}
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
