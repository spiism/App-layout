// @flow
import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default class SampleFormView extends Component {
  render() {
    return (
      <View flex style={styles.container}>
        <Text>SampleForm</Text>
        <TextInput
          placeholder="email@example.com"
          onChangeText={value =>
            this.props.setFormValue({
              email: value.trim()
            })}
          onBlur={() => {
            this.props.validateForm('email');
          }}
          error={this.props.form.errors.email}
        />
        <Text>Valid: {this.props.form.valid.toString()}</Text>
        <Button label="Save" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
