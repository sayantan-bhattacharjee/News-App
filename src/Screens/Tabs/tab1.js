
import React, { Component } from 'react';
import {Alert} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import {getArticles} from '../../service/news';

export default class ListAvatarExample extends Component {

  constructor(props) {
    super(props);
      this.State = {
        isLoading: true,
        data: null,
      }
  }

  componentDidMount() {
    getArticles().then(data => {
      this.setState({
        isLoading: false,
        data: data,
      })
    }
    error => {
      Alert.alert('Error', 'Something went wrong....!');
    }
    )
  }


  render() {
    console.log(this.state.data);
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}