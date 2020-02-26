import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//importing store
import store from './src/store'
import {Provider} from 'react-redux'
import TodoApp from './src/TodoApp'

//importing HomeScreen
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});

export default function App() {
  return (
    // <Provider store={store}>
    //   <TodoApp />
    // </Provider>
    <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
