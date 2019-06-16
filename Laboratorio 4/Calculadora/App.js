import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Calculadora from './src/components/Calculadora';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Calculadora/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3fffa',
  }
});
