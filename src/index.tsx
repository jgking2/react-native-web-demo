import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';

const AppWeb = () => (
  <>
    <style type="text/css">{`
  @font-face {
    font-family: 'MaterialIcons';
    src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');
  }
`}</style>
    <App />
  </>
);

AppRegistry.registerComponent('App', () => AppWeb);

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});
