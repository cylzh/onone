import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import {Text} from 'react-native'
import Douban from './douban'
import DoubanDetial from './detail'

const DoubanNavigator = StackNavigator({
  douban: {
    screen: Douban,
    navigationOptions: {
      headerTitle: '豆瓣电影'
    }
  },
  DoubanDetail: {
    screen: DoubanDetial,
    navigationOptions: {
      headerTitle: '详情'
    }
  }
})

export default DoubanNavigator
