import React, {Component} from 'react'
import { Image } from 'react-native'
import {Text, Container, Header, Left,Button, Icon, Title, Body, Right, Content, Footer,
FooterTab, Thumbnail, Card, CardItem, DeckSwiper, View} from "native-base"
export default class Galeri extends Component{
    render(){
        return(
          <Container>
            <Header hasTabs>
            <Left>
                <Button transparent onPress={()=>this.props.navigation.navigate("Beranda")}>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title>GALERI</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../logo.png')} />
                  <Body>
                    <Text>stmikakakom</Text>
                    <Text note>Desc 29, 2017</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={require('./img/gambarone.png')} style={{height: 200, width: 400, flex: 1}}/>
                  <Text>
                  Selamat kepada tim Rackspira telah berhasil menjadi juara 1 dalam elinfo competition 2017 😊.
                  Tim rackspira membuat aplikasi e-penting (electronic personal accounting) yang merupakan aplikasi untuk mengelola data keuangan berbasis mobile.
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
              <CardItem>
                <Left>
                  <Thumbnail source={require('../logo.png')} />
                  <Body>
                    <Text>stmikakakom</Text>
                    <Text note>Desc 28, 2017</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={require('./img/gambartwo.png')} style={{height: 200, width: 400, flex: 1}}/>
                  <Text>
                  Helooo, ada kabar baik nih pendaftaran PMB TA 2018/2019, sudah dibuka loh 😉. Pendaftaran hanya membuka 1 gelombang.
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
            <Footer>
              <FooterTab>
                <Button full>
                  <Text>Footer</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
        );
      }
    }