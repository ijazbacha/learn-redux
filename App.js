import React from 'react';
import { createStore } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/Screens/Counter';
import RootReducer from './src/Store/Reducer';
import { Provider } from 'react-redux';

const store = createStore(RootReducer)

export default function App() {
  return (
    <View style={styles.container}>
    <Provider store={store}>
      <Counter />
    </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
