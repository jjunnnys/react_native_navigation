import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class User extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> User </Text>
        <Button
          title="To User Screen"
          onPress={() => {
            this.props.navigation.navigate('Home'); // 스크린을 등록하면 props로 넘겨 받는다. (name값을 인자로 입력)
          }}
        />
      </View>
    );
  }
}

export default User;
