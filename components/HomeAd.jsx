import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function HomeAd() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require("../assets/homead.png")} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
