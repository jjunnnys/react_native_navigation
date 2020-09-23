import React, {Component} from 'react';
import {Button, Image, Text, View} from 'react-native';

import Logo from './assets/pics/home_icon.png';

class UserDrawer extends Component {
  drawerStyled = () => {
    this.props.navigation.setOptions({
      drawerIcon: () => <Image source={Logo} style={{width: 40, height: 40}} />,
    });
  };

  render() {
    this.drawerStyled();
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> User </Text>
        <Button
          title="To Home Screen"
          onPress={() => {
            this.props.navigation.navigate('Home'); // 스크린을 등록하면 props로 넘겨 받는다. (name값을 인자로 입력)
          }}
        />
      </View>
    );
  }
}

export default UserDrawer;
