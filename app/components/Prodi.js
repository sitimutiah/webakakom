import React, {Component} from 'react'
import {Text, Container, Header, Left,Button, Icon, Title, Body, Right, Content, Footer,
FooterTab,Card, CardItem, ListItem, List} from "native-base"
export default class Prodi extends Component{
    render(){
      var items = ['Komputer Akuntansi (D3)','Manajemen Informatika (D3)','Teknik Komputer (D3)','Teknik Informatika (S1)','Sistem Informasi (S1)'];
        return(
          <Container>
            <Header hasTabs>
            <Left>
                <Button transparent onPress={()=>this.props.navigation.navigate("Beranda")}>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title>PROGRAM STUDI</Title>
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