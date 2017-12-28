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
              <Text>STMIK AKAKOM Yogyakarta 
Jl. Raya Janti Karang Jambe No. 143 Yogyakarta 55198 Indonesia 
Telepon +62 274 486664, Fax +62 274 486438 
Email info@akakom.ac.id</Text>
              <Button>
                <Icon name='call' />
              </Button>
              <Button>
                <Icon name='call' />
              </Button>
              <Button>
                <Icon name='mail' />
              </Button>
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