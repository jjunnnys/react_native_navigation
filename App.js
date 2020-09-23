import 'react-native-gesture-handler'; // react navigation
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'; // 네비게이션 상태와 구조 관리
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Home from './src/Home';
import User from './src/User';
import LogoTile from './src/Logo';
import HomeDrawer from './src/HomeDrawer';
import UserDrawer from './src/UserDrawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://www.google.com')}
      />
      <DrawerItem label="Info" onPress={() => alert('Info Window')} />
    </DrawerContentScrollView>
  );
};

class App extends Component {
  render() {
    return (
      // headerbar 가 사라진다.
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerType="front"
          drawerPosition="right"
          drawerStyle={{
            backgroundColor: '#c6cbef',
            width: 200,
          }}
          drawerContentOptions={{
            activeTintColor: 'red',
            activeBackgroundColor: 'skyblue',
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeDrawer} />
          <Drawer.Screen name="User" component={UserDrawer} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
