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
                  <Text>Sosialisasi Prodi TI Semester Ganjil 2017/2018</Text>
                  <Text note>Sel, 22-Agt-2017 08:53:24</Text>
                </Body>
                <Thumbnail source={require('../logo.png')} />
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Info Penggantian Jadwal Kuliah</Text>
                  <Text note>en, 8-Mei-2017 04:30:22</Text>
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