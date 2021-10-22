import React from 'react';
import { createStore } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/Screens/Counter';


export default function App() {
  return (
    <View style={styles.container}>
    
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
