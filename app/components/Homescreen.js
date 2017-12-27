import React, {Component} from 'react'
import {StatusBar} from "react-native"
import { Container, Header, Left, Body, Right, Button, Icon, Title,
Content, Footer, FooterTab, Text, Tab, Tabs, TabHeading, Drawer } from 'native-base';
import Berita from './Berita'
import Info from './Info'

export default class Beranda extends Component{
  render(){
    return(
      <Container>
        <Header hasTabs>
        <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate("DrawerOpen")}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>STMIK AKAKOM</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Tabs>
            <Tab heading={<TabHeading><Text>Berita</Text></TabHeading>}>
            <Berita/>
            </Tab>
            <Tab heading={<TabHeading><Text>Info</Text></TabHeading>}>
            <Info/>
            </Tab>
          </Tabs>
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