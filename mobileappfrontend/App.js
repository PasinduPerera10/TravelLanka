import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from react-native-vector-icons
import ViewLocations from './components/ViewLocations';
import ViewLocation from './components/ViewLocation';
import Home from './components/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{
          title: 'Home',
          headerShown: false,

          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function ViewLocationsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ViewLocationsStack"
        component={ViewLocations}
        options={{
          title: 'View Locations',

          headerShown: false, // Hide the header for this screen
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="ViewLocation"
        component={ViewLocation}
        options={{
          title: 'View Location',
          headerShown: false, // Hide the header for this screen

          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="View Locations"
          component={ViewLocationsStack}
          options={{
            tabBarLabel: 'View Locations',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-map" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}