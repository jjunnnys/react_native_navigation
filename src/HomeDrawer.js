import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

class HomeDrawer extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> Home </Text>
        <Button
          title="To User Screen"
          onPress={() => {
            this.props.navigation.navigate('User'); // 스크린을 등록하면 props로 넘겨 받는다. (name값을 인자로 입력)
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default HomeDrawer;
