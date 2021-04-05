import { name } from "faker";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import data from "../data.json";

console.log(data.menu);

export default function NewMenu(content) {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{ uri: content.image }} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {},
  cardImage: {
    resizeMode: "repeat",
  },
});
