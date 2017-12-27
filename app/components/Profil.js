import React, {Component} from 'react'
import { Image } from 'react-native'
import {Text, Container, Header, Left,Button, Icon, Title, Body, Right, Content, Footer,
FooterTab, Card, CardItem, ListItem, List} from "native-base"
export default class Profil extends Component{
    render(){
      var items = ['Visi dan Misi','Profil STMIK AKAKOM','Struktur Organisasi','Dosen STMIK AKAKOM','Kontak'];
        return(
          <Container>
            <Header hasTabs>
            <Left>
                <Button transparent onPress={()=>this.props.navigation.navigate("Beranda")}>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title>PROFIL</Title>
              </Body>
              <Right />
            </Header>
            <Content>
            <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
            </List>
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