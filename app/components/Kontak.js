import React, {Component} from 'react'
import {Text, Container, Header, Left,Button, Icon, Title, Body, Right, Content, Footer,
FooterTab} from "native-base"
export default class Kontak extends Component{
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
                <Title>KONTAK</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <Text>Ini Kontak</Text>
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