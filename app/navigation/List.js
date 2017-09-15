import React, {Component} from 'react'
import { ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native'
import Banner from './banner'
import {StackNavigator} from 'react-navigation'
import SampleStack from './samplestack'
import styled from 'styled-components/native'

const routes = {
  SimpleStack: {
    screen: SampleStack,
    desc: 'A card stack'
  }
}

const View = styled.View`
padding: 10px;
border-bottom-width: ${StyleSheet.hairlineWidth};
border-bottom-color: #ddd;
`

const DescText = styled.Text`
  font-size: 13;
  color: #999;
`

class List extends Component {
  render () {
    const {navigate} = this.props.navigation
    return (
      <ScrollView>
        <Banner/>
        {
          Object.keys(routes).map((routeName) => (
            <TouchableOpacity
              key={routeName}
              onPress={ () => {
                const { path, params, screen } = routes[routeName];
                console.log(screen)
                const { router } = screen;
                const action = path && router.getActionForPathAndParams(path, params);
                navigate(routeName, {}, action);
              }
            }>
              <View>
                <Text>{routeName}</Text>
                <DescText>{routes[routeName].desc}</DescText>
              </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    )
  }
}

const AppNavigator = StackNavigator({
  ...routes,
  Index: {
    screen: List
  }
}, {
  initialRouteName: 'Index',
  headerMode: 'none'
})

export default AppNavigator