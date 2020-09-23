import 'react-native-gesture-handler'; // react navigation
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'; // 네비게이션 상태와 구조 관리
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/Home';
import User from './src/User';
import LogoTile from './src/Logo';

const Stack = createStackNavigator();

class App extends Component {
  logoTitle = () => {
    return (
      <Image
        style={{width: 30, height: 30}}
        source={require('./src/assets/pics/home_icon.png')}
      />
    );
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#dedede',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'gray',
            },
          }}>
          <Stack.Screen
            name="Home" // home 루트
            component={Home}
            options={{
              title: 'Home Screen',
              // headerTitle: <this.logoTitle />,
              headerTitle: <LogoTile />,
            }}
          />
          <Stack.Screen
            name="User" // user 루트
            component={User}
            initialParams={{
              userIdx: 40,
              userName: 'Minjun',
              userLastName: 'Seo',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
