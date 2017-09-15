import React, {Component} from 'react'
import { StyleSheet, Text} from 'react-native'
import styled from 'styled-components/native'

class Iconfont1 extends Component {
  render () {
    return (
      <Text style={styles.iconfont}>
        {this.props.children}
      </Text>
    )
  }
}
const Iconfont = styled.Text`
  font-family: 'iconfont';
  fontSize: 30;
`

const styles = StyleSheet.create({
  iconfont: {
    fontFamily: 'iconfont',
    fontSize: 30
  }
})

export default Iconfont
