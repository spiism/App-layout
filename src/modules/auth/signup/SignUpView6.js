import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Grid, Row, Col, Text, Button } from 'native-base';

type Props = {};

export default class SignUpView6 extends Component<Props> {
  render() {
    return (
        <Container style={styles.container}>
          <Row size={50}>
            <Col style={{ alignItems: 'center' }}>
              <Text>Thank you, you may proceed.</Text>
              <Button onPress={this.props.onNavigateNext}>
                <Text>Submit</Text>
              </Button>
            </Col>
          </Row>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});
