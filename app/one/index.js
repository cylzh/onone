import React, {Component} from 'react'
import {Button, View, ScrollView, Text} from 'react-native'
import {DrawerNavigator, DrawerItems} from 'react-navigation'

class MyHomeScreen extends Component {
  render () {
    return (
      <View>
        <Button onPress={() => this.props.navigation.navigate('DrawerOpen')} title="open"></Button>
        <Button onPress={() => this.props.navigation.navigate('Douban')} title="info"></Button>
      </View>
    )
  }
}

class MyNotificationsScreen extends Component {
  render () {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    )
  }
}

const DrawerView = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
    path: 'home',
    navigationOptions: {
      drawerLabel: 'home'
    }
  },
  Info: {
    screen: MyNotificationsScreen,
    navigationOptions: {
      drawerLabel: 'info'
    }
  }
}, {
  contentComponent : props => {
    console.log(props)
    return (
      <ScrollView style={{flex: 1}}>
        <Text>Hello Drawer!</Text>
        <DrawerView {...props} />
        <Button onPress={() => this.props.navigation.navigate('Douban')} title="info"></Button>
      </ScrollView>
    )
  },
  contentOptions () {
    
  }
})

export default DrawerView
