import React, {Component} from 'react'
import {View, Button, Text} from 'react-native'
import {StackNavigator, NavigationActions} from 'react-navigation'
import Iconfont from './iconfont'

class MyNavScreen extends Component {
  render () {
    return (
      <View>
        <Text>{this.props.banner}</Text>

        <Text>1</Text>
        <Iconfont>&#xe6c8;</Iconfont>
        <Button onPress={() => this.props.navigation.navigate('Profile', {name: 'jane'})} title='go to profile'></Button>
        <Button onPress={() => this.props.navigation.goBack(null)} title='go back'></Button>
      </View>
    )
  }
}

class MyHomeScreen extends Component {
  static navigationOptions = {
    headerTitle: 'welcome'
  }
  render () {
    const navigation = this.props.navigation
    return (
      <MyNavScreen banner="Home Screen" navigation={navigation} />
    )
  }
}

class MyProfileScreen extends Component {
  static navigationOptions = ({navigation}) => {
    console.log(navigation)
    const {params} = navigation.state
    const setParams = navigation.setParams
    return {
      headerTitle: `${params.name}`,
      headerRight: (
        <Button title={params.mode === 'edit'? 'Done' : 'Edit'} onPress={
          () => {
            setParams({ mode: params.mode === 'edit' ? '' : 'edit' })
          }
        }></Button>
      )
    }
  }
  render () {
    const {params} = this.props.navigation.state
    return (
      <MyNavScreen banner={`${params.mode === 'edit' ? 'now edit' : params.name} profile`} navigation={this.props.navigation}/>
    )
  }
}

class Friends extends Component {
  render () {
    return (
      <MyNavScreen banner="profile"/>
    )
  }
}

const SampleStack = StackNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Profile: {
    screen: MyProfileScreen,
    path: '/profile/:name'
  },
  Friends: {
    screen: Friends
  }
})

// const prevGetActionForPathAndParams = SampleStack.router.getActionForPathAndParams()
// Object.assign(SampleStack.router, {
//   getActionForPathAndParams(path, params) {
//     if (
//       path === '/path'
//     ) {
//       console.log('path')
//       // returns a profile navigate action for /my/custom/path?magic=yes
//       return NavigationActions.navigate({
//         routeName: 'Profile',
//         action: NavigationActions.navigate({
//           // This child action will get passed to the child router
//           // ProfileScreen.router.getStateForAction to get the child
//           // navigation state.
//           routeName: 'Friends',
//         })
//       })
//     }
//     return prevGetActionForPathAndParams(path, params);
//   },
// })

export default SampleStack
