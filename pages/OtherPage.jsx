import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function OtherPage() {
  return (
    <View style={styles.container}>
      <Image></Image>
    </View>
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
