import React,{Component} from "react";
import { StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem, Left, Body, Icon,
Right} from "native-base";
const routes = ["Beranda", "Profil", "Prodi", "Galeri", "Kontak"];
export default class MenuSamping extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}