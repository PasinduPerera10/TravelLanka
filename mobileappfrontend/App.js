import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ViewLocations from './components/ViewLocations'; // Correct path and default import
import ViewLocation from './components/ViewLocation'; // Correct path and default import

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ViewLocations" component={ViewLocations} />
        <Stack.Screen name="ViewLocation" component={ViewLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}