// @flow
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';

export default class AlertsView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Alerts View</Text>
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
