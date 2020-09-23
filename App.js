import 'react-native-gesture-handler'; // react navigation
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'; // 네비게이션 상태와 구조 관리
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/Home';
import User from './src/User';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
