import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './navigation/AppNavigation';

export default function App() {
  return (
    <AppContainer />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
