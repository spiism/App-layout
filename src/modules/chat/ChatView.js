// @flow
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';

export default class ChatView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Chat View</Text>
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
