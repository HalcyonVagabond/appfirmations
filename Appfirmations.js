import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './components/authentication/LoginPage'
import Welcome from './components/Welcome'

export default function Appfirmations() {
  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
});
