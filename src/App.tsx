import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from './LoginScreen';
import {HomeScreen} from './HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Login'} component={LoginScreen} />
          <Stack.Screen name={'Home'} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
