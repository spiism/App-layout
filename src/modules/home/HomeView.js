// @flow
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Body,
  Right,
  Title,
  Content,
  Text,
  Button,
  Icon
} from 'native-base';
// import i18n from '../../i18n';

export default class HomeView extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text>
            Uniwaka - Carpooling App
          </Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});
