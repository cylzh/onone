import React, {Component} from 'react'
import { Platform} from 'react-native'
import styled from 'styled-components/native'

const BannerView = styled.View`
  background-color: #673ab7;
  flex-direction: row;
  padding: 16px;
  marginTop: ${() => Platform.OS === 'ios' ? 20 : 0};
  align-items: center;
  
`

const Image = styled.Image`
  width: 36;
  height: 36;
  margin: 8px;
`

const Text = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: #fff;
  margin: 8px;
`

class Banner extends Component {
  render () {
    return (
        <BannerView>
          <Image source={require('./assets/NavLogo.png')}></Image>
          <Text>React Navigation Examples</Text>
        </BannerView>
    )
  }
}

export default Banner
