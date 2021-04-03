import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Card,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollViewComponent,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Container } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import homead from "../assets/homead.png";

export default function HomePage() {
  return (
    <Container style={styles.container}>
      <ScrollView>
        <StatusBar style="black" />

        {/* Animated Header안에 들어갈 랜덤으로 바뀌는 인삿말 */}
        <View style={styles.TopMessage}>
          <Text style={styles.toptext}>
            고객님~{"\n"}반갑습니다!
            <FontAwesome name="coffee" size={24} color="green" />
          </Text>
        </View>

        <View style={styles.makecard}>
          <Text style={styles.cardtext}>
            스타벅스 카드를 등록하시고{"\n"}
            <Text style={{ color: "green", fontWeight: "bold" }}>
              스타벅스 리워드
            </Text>
            회원의{"\n"}다양한 혜택을 누리세요!
          </Text>
          <TouchableOpacity style={styles.cardbutton}>
            <Text style={{ color: "white", fontSize: 18 }}>카드등록</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Addbox}>
          <Image
            source={homead}
            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
          />
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  TopMessage: {
    paddingTop: 100,
    paddingLeft: 25,
    paddingBottom: 30,
  },
  toptext: {
    fontSize: 30,
    fontWeight: "700",
  },
  makecard: {
    padding: 25,
    paddingTop: 30,
    paddingBottom: 30,
    margin: 20,
    borderBottomColor: "black",
    width: "90%",
    height: 200,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardtext: {
    fontSize: 15,
    paddingBottom: 30,
    lineHeight: 22,
  },
  cardbutton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    width: 100,
    borderRadius: 40,
  },
  Addbox: {
    margin: 20,
    borderBottomColor: "black",
    height: 430,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
