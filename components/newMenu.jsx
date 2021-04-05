import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import data from "../data.json";
import ad2 from "../assets/ad2.jpg";

export default function newMenu(Image) {
  return (
    <View style={styles.container}>
      <Image source={ad2} style={style.img}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    borderRadius: 10,
    height: "100%",
    width: "100%",
    resizeMode: "repeat",
  },
});
