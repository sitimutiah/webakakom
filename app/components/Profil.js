import React, {Component} from 'react'
import {Text, Container, Header, Left,Button, Icon, Title, Body, Right, Content, Footer,
FooterTab, Card, CardItem, ListItem, List} from "native-base"
export default class Profil extends Component{
    render(){
      var items = ['Visi dan Misi',
      'STMIK AKAKOM mempunyai visi untuk menjadi perguruan tinggi unggulan dalam bidang teknologi informasi yang bertumpu pada nilai-nilai dan etika kehidupan yang baik, benar dan universal untuk mewujudkan peningkatan taraf hidup bangsa. Adapun misi STMIK AKAKOM adalah melaksanakan Tridharma Perguruan Tinggi dalam bidang komputer dan teknologi informasi yang berorientasi kepada perkembangan ilmu pengetahuan, teknologi dan seni.',
      'Profil STMIK AKAKOM',
      'Dalam abad ke-20 ini dunia banyak diwarnai dengan berbagai kemajuan secara menakjubkan yang telah diciptakan oleh umat manusia, baik dibidang ilmu maupun teknologi. Menanggapi kondisi zaman seperti tersebut di atas, pada tanggal 30 Juni 1979 didirikan sebuah yayasan dengan nama Yayasan Pendidikan Widya Bakti, yang bertujuan mengembangkan dan menyebarluaskan informatika dan teknologi komputer di kalangan masyarakat indonesia melalui usaha pendidikan yang sistematis dan ilmiah. Yayasan tersebut mengelola sebuah akademi yang bernama Akademi Aplikasi Komputer, disingkat AKAKOM. Terhitung mulai 1 Maret 1983, Akademi Aplikasi Komputer(AKAKOM), diubah menjadi Akademi Komputer dan Informatika AKAKOM. Selanjutnya terhitung mulai tanggal 2 Mei 1985, nama Akademi Komputer dan Informatika AKAKOM diubah dan dibakukan menjadi Akademi Manajemen Informatika dan Komputer(AMIK)AKAKOM. Agar lembaga tersebut mampu menghasilkan tenaga-tenaga profesional maupun akademik yang lebih berbobot dalam bidang informatika dan komputer, maka sejak tanggal 8 Juni 1992, berdasarkan Surat Keputusan Direktorat Jendral Pendidikan Tinggi Departemen Pendidikan dan Kebudayaan RI Nomor 262/DIKTI/Kep/1992, AMIK AKAKOM diubah bentuknya menjadi Sekolah Tinggi Manajemen Informatika dan Komputer (STMIK) AKAKOM yang membuka program sarjana dan program diploma. Saat ini program sarjana mempunyai program stusi Teknik Informatika dan Sistem Informasi dengan status akreditasi B dan pada program diploma mempunyai 3 program studi yaitu Manajemen Informatika (status Akreditasi B), Teknik Komputer(status Akreditasi B), dan Komputerisasi Akuntansi (status Akreditasi B).',
      ];
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