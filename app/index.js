import React from 'react'
import {StackNavigator} from 'react-navigation'
import Douban from './douban/index'
import Draw from './one/index'

const AppNavigator = StackNavigator({
  Douban: {
    screen: Douban
  },
  Draw: {
    screen: Draw
  }
}, {
  headerMode: 'none',
  initialRouteName: 'Draw',
})

export default AppNavigator
