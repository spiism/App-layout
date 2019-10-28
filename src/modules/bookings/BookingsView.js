// @flow
import React, { Component } from 'react'
import { StyleSheet, View, Text, Button,Alert, } from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}


export default class BookingsView extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
      }}>
        <View style={{height: 150, backgroundColor: 'green'}} />
        <Text>Ride requests</Text>
        <View style={{height: 150, backgroundColor: 'green'}} />
        <Text>Book rides</Text>
        <View style={{height: 150, backgroundColor: 'green'}} />
        <Text>Journey tracker</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
