import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config'

export default class MyHeader extends Component{
 
  render(){
    return(
        <Header
          leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  />}
          centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
          rightComponent={<Icon name='plus' type='font-awesome' color='#696969'  /> }
          backgroundColor = "#eaf8fe"
        />

) 
}

}