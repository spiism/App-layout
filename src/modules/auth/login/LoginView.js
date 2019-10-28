import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Grid, Row, Col, Text, Button } from 'native-base';

type Props = {};

export default class LoginView extends Component<Props> {
  render() {
    return (
        <Container style={styles.container}>
          <Grid>
            <Row size={50} style={{ justifyContent: 'center' }}>
              <Text>Log In</Text>
            </Row>
            <Row size={50}>
              <Col style={{ alignItems: 'center'}}>
                <Button transparent onPress={this.props.onNavigateLogin}>
                  <Text style={styles.forgotPassword}>Forgot your password?</Text>
                </Button>
                <Button onPress={this.props.onLogin}>
                  <Text>Log In</Text>
                </Button>
                <Button onPress={this.props.onNavigateRegister}>
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
});
