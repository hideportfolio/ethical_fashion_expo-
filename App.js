import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Top from './src/Screens/Top.js'
import BackImage from './src/Screens/Image'

export default function App() {
  return (
    <View style={styles.container}>
      <Top></Top>
      {/* <BackImage></BackImage> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
