import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Crypto Prices">
        <Stack.Screen name="Crypto Prices" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
