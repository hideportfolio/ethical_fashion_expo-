import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Top from './src/Screens/Top.js';
import Categorize from './src/Screens/Categorize.js';
import Category from './src/Screens/Category.js';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Top></Top> */}
      {/* <Categorize></Categorize> */}
      <Category></Category>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
