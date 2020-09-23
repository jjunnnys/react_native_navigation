import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> Home </Text>
        <Button
          title="To User Screen"
          onPress={() => {
            this.props.navigation.navigate('User', {
              userIdx: 100,
              userName: 'Gildong',
              userLastName: 'Hong',
            }); // 스크린을 등록하면 props로 넘겨 받는다. (name값을 인자로 입력)
          }}
        />
        <Button
          title="Change the title"
          onPress={() =>
            this.props.navigation.setOptions({
              title: 'Changed!!',
              headerStyle: {
                backgroundColor: 'pink',
              },
              headerTintColor: 'red',
            })
          }
        />
      </View>
    );
  }
}

export default Home;
