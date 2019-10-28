import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Grid, Row, Col, Text, Button } from 'native-base';

type Props = {};

export default class SignUpView3 extends Component<Props> {
  render() {
    return (
        <Container style={styles.container}>
          <Row size={50}>
            <Col style={{ alignItems: 'center' }}>
              <Text>What's the magic word?</Text>
              <Button onPress={this.props.onNavigateNext}>
                <Text>Next</Text>
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
