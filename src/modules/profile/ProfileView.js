import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';

export default class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount() {
    // call API get infomation
  }

  render() {
    return (
        <Container style={styles.container}>
          <Content>
            <Text>Profile</Text>
          </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});
