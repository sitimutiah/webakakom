import React, {Component} from 'react'
import {Text, Container, Header, Left,Button, Icon, Title, Body, Right, Content, Footer,
FooterTab} from "native-base"
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
              <Text>Ini Galeri</Text>
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