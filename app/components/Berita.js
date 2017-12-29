import React, {Component} from 'react'
import { Image, Alert } from 'react-native'
import { Container, Content, Card, CardItem, Left, Right, Thumbnail, Body, Text,
Button, Icon } from 'native-base';

export default class Berita extends Component{
  render(){

    return(
      <Container>
        <Content>
          <Card>
            <CardItem button onPress={()=>Alert.alert("tes")}>
              <Left>
                <Body>
                  <Text>KUNJUNGAN INDUSTRI SMK UMAR FATAH KE STMIK AKAKOM</Text>
                  <Text note>Jum, 24-Nov-2017 06:21:51</Text>
                </Body>
                <Thumbnail source={require('../logo.png')} />
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem button onPress={()=>navigation.navigate("Beritasatu")}>
              <Left>
                <Body>
                  <Text>Kuliah Akbar Aksi Kebangsaan Perguruan Tinggi Melawan Radikalisme</Text>
                  <Text note>Jum, 17-Nov-2017 06:02:09</Text>
                </Body>
                <Thumbnail source={require('../logo.png')} />
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>DevSummit 2017- Yogyakarta Dengan Tema "Github For Kids Jaman Now"</Text>
                  <Text note>Jum, 17-Nov-2017 06:00:45</Text>
                </Body>
                <Thumbnail source={require('../logo.png')} />
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Kuliah TAMU Dengan Tema "Mencegah Paham Radikalisme Dengan Mengamalkan Pancasila"</Text>
                  <Text note>Jum, 20-Okt-2017 04:26:34</Text>
                </Body>
                <Thumbnail source={require('../logo.png')} />
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Kunjungan PT Freeport Indonesia Ke STMIK AKAKOM Yogyakarta
</Text>
                  <Text note>Jum, 20-Okt-2017 04:08:47</Text>
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