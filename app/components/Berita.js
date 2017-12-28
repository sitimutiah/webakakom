import React, {Component} from 'react'
import { Image } from 'react-native'
import { Container, Content,Card, CardItem, Left, Thumbnail, Body, Text,
Button, Icon } from 'native-base';
export default class Berita extends Component{
  render(){
    return(
      <Container>
        <Content>
          <Card style={{flex: 0}}>
          <CardItem>
              <Left>
                <Thumbnail source={require('../logo.png')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('./kunjunganum.jpg')} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
                
          </Card>
        </Content>
      </Container> 
    );
  }
}