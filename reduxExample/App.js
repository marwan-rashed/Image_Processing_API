/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux';
import store from './src/store/storeConfig';
import Tasks from './src/screens/tasks';
import AddTask from './src/screens/addTask';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = 'Tasks' component = { Tasks }/>
          <Stack.Screen name = 'Add Task' component = { AddTask }/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
