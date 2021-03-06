import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login'
import Register from './src/pages/Register'
import Recover from './src/pages/Recover'
import Home from './src/pages/Home'

const Stack = createStackNavigator();

export default function App() {
  return (
    < NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Recover" component={Recover} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    </ NavigationContainer>
  );
}
