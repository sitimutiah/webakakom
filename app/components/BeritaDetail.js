import React, {Component} from 'react'
import { Image } from 'react-native'
import { Container, Content, Card, CardItem, Left, Right, Thumbnail, Body, Text,
Button, Icon } from 'native-base';
export default class Berita extends Component{
  render(){
    return(
      <Container>
        <Content>
          <Card style={{flex: 0}}>
          <CardItem style={{borderBottomColor: 'black', borderBottomWidth: 1}}>
              <Left>
                <Body>
                  <Text>KUNJUNGAN INDUSTRI SMK UMAR FATAH KE STMIK AKAKOM</Text>
                  <Text note>Jum, 24-Nov-2017 06:21:51</Text>
                </Body>
                <Thumbnail source={require('../logo.png')} />
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('./kunjunganum.jpg')} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  Yogyakarta, 21 November 2017-Perkembangan IT pada sebuah negara mampu meningkatkan kinerja  yang ada, sehingga negara tersebut bisa dikatakan sebagai negara maju. IT berperan penting dalam pendidikan, maka SMK UMAR FATAH mengadakan  kunjungan industri bagi siswa kelas 11 yang terdiri dari kompetensi keahlian Multimedia, Rekayasa Perangkat Lunak, dan Teknik Komputer dan Jaringan ke STMIK AKAKOM dengan jumlah peserta sebanyak 80 orang. STMIK AKAKOM merupakan sekolah  tinggi IT yang tertua di Yogyakarta dan institusi yang sudah terakreditasi B.

Acara yang diselenggarakan di ruang presentasi tersebut dibuka oleh Ir. Totok Prawoto, M.M., M.T. dan dilanjutkan materi yang disampaikan oleh Bapak Kuindra Irianto tentang Arduino. Arduino sangat populer di dunia karena banyak  sekali pemula yang belajar mengenal robotika dan elektronika lewat Arduino. Kegiatan belajar yang berlangsung sampai tengah hari pun tak menyurutkan semangat para siswa SMK UMAR FATAH untuk belajar dan mengenal lebih dekat dengan STMIK AKAKOM. Dari kunjungan industri inilah siswa diharapkan dapat memberikan gambaran bagaimana teknologi berkembang dan teknologi yang dibuat dapat diwujudkan dalam  dunia nyata.
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
      </Container> 
    );
  }
}