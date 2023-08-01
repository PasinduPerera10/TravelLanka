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
        <Stack.Screen
          name="ViewLocations"
          component={ViewLocations}a
          options={{
            title: 'View Beaches', // Navigation bar title for this screen
            headerStyle: {
              backgroundColor: '#f4511e', // Customize header background color
            },
            headerTintColor: '#fff', // Customize header text color
            headerTitleStyle: {
              fontWeight: 'bold', // Customize header title style
            },
          }}
        />
        <Stack.Screen
          name="ViewLocation"
          component={ViewLocation}
          options={{
            title: 'View Location', // Navigation bar title for this screen
            headerStyle: {
              backgroundColor: '#f4511e', // Customize header background color
            },
            headerTintColor: '#fff', // Customize header text color
            headerTitleStyle: {
              fontWeight: 'bold', // Customize header title style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}