/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {Text, AppRegistry} from 'react-native'
import {StackNavigator} from 'react-navigation'
import AppNavigator from './app/index'
import Navigation from './app/navigation/List'

class Hello extends Component {
  render () {
    return (
      <Text>hello world</Text>
    )
  }
}

class Test extends Component {
  render () {
    return (
      <Text>hello world!</Text>
    )
  }
}
const App = StackNavigator({
  home: {
    screen: Hello,
    navigationOptions: {
      headerTitle: 'home'
    }
  },
  test: {
    screen: Test,
    navigationOptions: {
      headerTitle: 'test'
    }
  }
})

AppRegistry.registerComponent('oneone', () => () => <Navigation screenProps={{test: 1}}/>);
