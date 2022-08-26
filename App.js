import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import Button from './src/components/Button';

export default class App extends Component() {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.buttons}>
          <Button label="AC" />
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
