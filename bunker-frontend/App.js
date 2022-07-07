import React from  'react';
import {View} from 'react-native'
import HomePage from './pages/HomePage';
import JoinGroupPage from './pages/JoinGroupPage';
import HostGroupPage from './pages/HostGroupPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomePage}/>
        <Stack.Screen
          name='Join'
          component={JoinGroupPage} />
        <Stack.Screen
          name='Create'
          component={HostGroupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

