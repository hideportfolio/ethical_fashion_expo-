import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

// const image = { uri: "../../assets/top.png" };
const image = require("../../assets/top.png");

const Top = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Log in</Text>
      <Text style={styles.input}>User ID</Text>
      <Text style={styles.input}>Password</Text>
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
  text: {
    color: "white",
    fontSize: 32,
    // lineHeight: 84,
    // fontWeight: "bold",
    textAlign: "center",
    // color: "yellow"
    // backgroundColor: "#000000c0"
    },
    input: {
        fontSize: 32,
        lineHeight: 44,
        width: "60%",
        // fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#bba58cc0",
        //   backgroundColor: "rgba(187, 165, 140, 0.8)",
        color: "white",
    },
});

export default Top;