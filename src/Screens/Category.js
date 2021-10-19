import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = require("../../assets/category.png");

const Category = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.box}>
                <Text style={styles.text}>FOR THE PLANET</Text>
      </View>
      <View style={styles.box}>
                <Text style={styles.text}>FOR THE OCEAN</Text>
      </View>
      <View style={styles.box}>
                <Text style={styles.text}>FOR WOMEN</Text>
      </View>
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
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: "100%",
  },
  text: {
    color: "#6a7479",
    fontSize: 28,
    textDecorationLine: 'underline',
    width: "99%",
    textAlign: "center",
    marginTop: 230,
    width: "90%",
    },
});

export default Category;