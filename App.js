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
import PictogramHome from './src/assets/pics/home_icon.png';
import MyDrawer from './src/MyDrawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Help"
//         onPress={() => Linking.openURL('https://www.google.com')}
//         icon={() => <LogoTile />}
//       />
//       <DrawerItem label="Info" onPress={() => alert('Info Window')} />
//     </DrawerContentScrollView>
//   );
// };

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
            backgroundColor: '#dedede',
            width: 200,
          }}
          drawerContentOptions={{
            activeTintColor: 'red',
            activeBackgroundColor: 'skyblue',
          }}
          drawerContent={(props) => <MyDrawer {...props} />}>
          <Drawer.Screen
            name="Home"
            component={HomeDrawer}
            options={{
              drawerIcon: () => (
                <Image source={PictogramHome} style={{width: 40, height: 40}} />
              ),
            }}
          />
          <Drawer.Screen name="User" component={UserDrawer} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
