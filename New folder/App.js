import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './components/Main';
import Calculator from './components/Calculator';
import Weather from './pages/Weather';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="Weather" component={Weather} options={{title: 'Weather'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;