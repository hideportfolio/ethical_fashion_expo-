import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

// const image = { uri: "../../assets/top.png" };
const image = require("../../assets/categorize.png");

const Categorize = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={{flex: 1}}></View>
      <View style={{flex: 1}}>
        <Text style={styles.title}>HOW TO CATEGORIZA</Text>
        <Text style={styles.input}>ITEMS</Text>
        <Text style={styles.input}>ETHICAL COMMITMENTS</Text>
      </View>
      <View style={{flex: 1}}></View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  title: {
    color: "#908d83",
    fontSize: 22,
    textDecorationLine: 'underline',
    width: "99%",
    textAlign: "center",
    marginBottom: 20,
    },
    input: {
        fontSize: 22,
        lineHeight: 44,
        marginVertical: "20px",
        textAlign: "center",
        color: "#908d83",
        backgroundColor: "#e4dfe1",
        color: "white",
    },
});

export default Categorize;