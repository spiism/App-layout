// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default class ContactView extends Component {
  render() {
    return (
      <View flex style={styles.container}>
        <Text>Contact View</Text>
        <TextInput
          placeholder="email@example.com"
          onChangeText={value =>
            this.props.setFormValue({
              email: value.trim()
            })
          }
          onBlur={() => {
            this.props.validateForm('email');
          }}
          error={this.props.form.errors.email}
        />
        <Text>Valid: {this.props.form.valid.toString()}</Text>
        <Button title="Save" />
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
});
