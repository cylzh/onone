import React, {Component} from 'react'
import {View, Text, WebView} from 'react-native'

class WebLoadingView extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',
        alignItems:'center',backgroundColor:'#f2f2f2'}}>
        <Text style={{color: '#000', fontSize: 16}}>
          页面正在加载...
        </Text>
      </View>
    )
  }
}


export default class Detail extends Component {
  constructor (props) {
    super(props)

  }
  loading () {
    return <WebLoadingView/>
  }

  render () {
    const {params} = this.props.navigation.state
    console.log('detail')
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{url: `https://movie.douban.com/subject/${params.id}/`}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={this.loading}

        >

        </WebView>
      </View>
    )
  }
}
