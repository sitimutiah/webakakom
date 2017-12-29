import React, {Component} from 'react'
import {Text, Container, Header, Left,Button, Icon, Title, Body, Right, Content, Footer,
FooterTab, Card, CardItem} from "native-base"
export default class Beritasatu extends Component{
    render(){
        return(
          <Container>
            <Header hasTabs>
            <Left>
                <Button transparent onPress={()=>this.props.navigation.navigate("")}>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title>BERITA</Title>
              </Body>
              <Right />
            </Header>
            <Content>
                <Card>
                <CardItem>
                    <Text>Yogyakarta, 21 November 2017-Perkembangan IT pada sebuah negara mampu meningkatkan kinerja  yang ada, sehingga negara tersebut bisa dikatakan sebagai negara maju. 
                        IT berperan penting dalam pendidikan, maka SMK UMAR FATAH mengadakan  kunjungan industri bagi siswa kelas 11 yang terdiri dari kompetensi keahlian Multimedia, Rekayasa Perangkat Lunak, dan Teknik Komputer dan Jaringan ke STMIK AKAKOM dengan jumlah peserta sebanyak 80 orang. 
                        STMIK AKAKOM merupakan sekolah  tinggi IT yang tertua di Yogyakarta dan institusi yang sudah terakreditasi B.</Text>
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