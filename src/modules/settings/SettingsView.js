import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';

export default class SettingsView extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text>Settings</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
