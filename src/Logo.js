import React, {Component} from 'react';
import {Image} from 'react-native';

import logo from './assets/pics/home_icon.png';

class LogoTile extends Component {
  render() {
    return <Image style={{width: 30, height: 30}} source={logo} />;
  }
}

export default LogoTile;
