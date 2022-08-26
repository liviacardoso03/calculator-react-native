import React from 'react';
import {StyleSheet, Text, Dimensions, TouchableHighLight} from 'react-native';

export default props => {
  return (
    <TouchableHighLight onPress={props.onClick}>
      <Text style={styles.buttons}>{props.label}</Text>
    </TouchableHighLight>
  );
};

const styles = StyleSheet.create({
  buttons: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
});
