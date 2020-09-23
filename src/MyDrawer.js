import React, {Component} from 'react';
import {Button, Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import Logo from './assets/pics/home_icon.png';

class MyDrawer extends Component {
  navigateToScreen = (route) => () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: route,
        params: {},
      }),
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.imageContainer}>
              <Image source={Logo} style={{width: 40, height: 40}} />
            </View>
            <Text style={styles.sectionHeading}>Section 1</Text>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItem}
                onPress={this.navigateToScreen('Home')}>
                Home
              </Text>
              <Text
                style={styles.navItem}
                onPress={this.navigateToScreen('User')}>
                User
              </Text>
              <Text style={styles.navItem} onPress={() => alert('help')}>
                Help
              </Text>
              <Text style={styles.navItem} onPress={() => alert('info')}>
                Info
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={{alignItems: 'center', paddingBottom: 30}}>
          <Text>&copy; ppby {new Date().getFullYear()}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 50,
  },
  sectionHeading: {
    color: '#fff',
    backgroundColor: '#ef9de4',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: 'bold',
  },
  navSectionStyle: {
    backgroundColor: '#04b6ff',
  },
  navItem: {
    padding: 10,
    color: '#fff',
  },
});

export default MyDrawer;
