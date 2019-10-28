import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Grid, Row, Col, Text, Button } from 'native-base';

type Props = {};

export default class AuthView extends Component<Props> {
  render() {
    return (
      <Container style={styles.container}>
        <Grid>
          <Row size={50} style={{ justifyContent: 'center' }}>
            <Text>Home</Text>
          </Row>
          <Row size={50}>
            <Col style={{ alignItems: 'center' }}>
              <Button onPress={this.props.onNavigateLogin}>
                <Text>Log In</Text>
              </Button>
              <Button onPress={this.props.onNavigateSignUp1}>
                <Text>Sign Up</Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  forgotPassword: {
    textDecorationLine: 'underline'
  }
});
