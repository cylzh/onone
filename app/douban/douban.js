import React, {Component} from 'react'
import {FlatList, View, Image, Text, TouchableHighlight} from 'react-native'
import _ from 'lodash/fp'
import styled from 'styled-components/native'

const ImageView = styled.View`
  width: 100;
  height: 180;
`

const ListItemView = styled.View`
  flex-direction: row;
  padding: 10px;
`

const DescView = styled.View`
  justify-content: space-around;
  padding-left: 20;
`

const Separator = styled.View`
  border-bottom-width: 1;
  border-bottom-color: #333333;
`

class Douban extends Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false,
      list: [],
      start: 0,
      count: 20
    }
  }

  componentDidMount () {
    this.toggleRefreshing()
    this.getMovieList()
  }

  toggleRefreshing () {
    this.setState({
      refreshing: !this.state.refreshing
    })
  }

  onRefresh = () => {
    this.toggleRefreshing()
    this.setState({
      start: ++this.state.start
    })
    this.getMovieList()
  }

  _renderItem = ({item}) => {
    return (
      <TouchableHighlight
        onPress={ () => {this._onPressItem(item.id)}}
      >
        <ListItemView style={{backgroundColor: '#fff'}}
        >
          <ImageView>
            <Image style={{width: 100, height: 180}} resizeMode='contain' source={{uri: item.images.small}}></Image>
          </ImageView>
          <DescView>
            <Text>{item.title}</Text>
            <Text>电影评分：{item.rating.average}</Text>
            <Text>上映时间：{item.year}</Text>
          </DescView>
        </ListItemView>
      </TouchableHighlight>
    )
  }

  getMovieList = () => {
    fetch(`https://api.douban.com/v2/movie/top250?start=${this.state.count * this.state.start}&count=${this.state.count}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const list = this.state.list
        let result = _.slice(0)(list.length)(list)
        result.unshift(...data.subjects)
        this.setState({
          list: result
        })

        this.toggleRefreshing()
      })
      .catch((res) => {
        console.log(res)
      })
  }

  separator () {
    return (
      <Separator></Separator>
    )
  }

  _onPressItem = (id) => {
    const {navigate} = this.props.navigation
    console.log(id)
    navigate('doubanDetail', {
      id: id
    })
  }

  render () {
    return (
      <FlatList
        data={this.state.list}
        renderItem={this._renderItem}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
        ItemSeparatorComponent = {this.separator}
      >

      </FlatList>
    )
  }
}

export default Douban
