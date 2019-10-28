// @flow
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';

export default class JourneyView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Journey View</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
