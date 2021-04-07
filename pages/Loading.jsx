import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";

const backImage = require("../assets/splash.png");

const WindowWidth = Dimensions.get("window").width;
const ThumbSize = WindowWidth * 0.12;

export default function Loading() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backImage}
        style={styles.backImage}></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#FDFBF7",
  },
  backImage: {
    width: WindowWidth,
    height: WindowWidth * 2,
    justifyContent: "center",
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
});
