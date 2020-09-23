import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class User extends Component {
  render() {
    const {params} = this.props.route; // 이 스크린의 루트값을 할당
    const userIdx = params?.userIdx;
    const userName = params?.userName;
    const userLastName = params?.userLastName;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> User </Text>
        <Button
          title="To User Screen"
          onPress={() => {
            this.props.navigation.navigate('Home'); // 스크린을 등록하면 props로 넘겨 받는다. (name값을 인자로 입력)
          }}
        />
        <Text>User Idx: {JSON.stringify(userIdx)}</Text>
        <Text>User Name: {JSON.stringify(userName)}</Text>
        <Text>User lastName: {JSON.stringify(userLastName)}</Text>
      </View>
    );
  }
}

export default User;
