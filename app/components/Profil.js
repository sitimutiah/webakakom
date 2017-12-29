import React, {Component} from 'react'
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
            <Card dataArray={items}
            renderRow={(item) =>
              <CardItem>
                <Text>{item}</Text>
                <Right>
                  <Icon name="arrow-forward"/>
                </Right>
              </CardItem>
            }>
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