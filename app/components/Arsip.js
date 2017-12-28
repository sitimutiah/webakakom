import React, {Component} from 'react'
import { Image } from 'react-native'
import { Container, Content, Card, CardItem, Left, Right, Thumbnail, Body, Text,
Button, Icon } from 'native-base';
export default class Arsip extends Component{
  render(){
    return(
        <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Kalender Akademik</Text>
                  <Text note>Sel, 4-Agt-2015 08:27:35</Text>
                </Body>
                <Thumbnail source={require('../logo.png')} />
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Blog STMIK AKAKOM Yogyakarta</Text>
                  <Text note>Jum, 13-Sep-2013 08:05:25</Text>
                </Body>
                <Thumbnail source={require('../logo.png')} />
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}