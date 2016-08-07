<<<<<<< Updated upstream
class whatever01 extends React.component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initRoute={{
          title: 'FBLogin',
          component: FBlogin.js,
        }}
       />
=======
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
NavigatorIOS,
TabBarIOS,
} from 'react-native';

var SearchPage = require('./SearchPage');
var TabBarExample = require('./TabBarIOS');

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


class PropertyFinderApp extends Component {
  render() {
    return (
     <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Property Finder',
        component: SearchPage,
     }}/>
>>>>>>> Stashed changes
    );
  }
}

<<<<<<< Updated upstream
var styles = React.Stylesheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  constainer: {
    flex: 1
  }
});
=======

AppRegistry.registerComponent('PropertyFinder', function()
{
  return PropertyFinderApp;
});
>>>>>>> Stashed changes
