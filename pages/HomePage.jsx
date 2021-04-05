import React, { useState, useEffect } from "react";
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
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Container } from "native-base";

import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import homead from "../assets/homead.png";
import ad2 from "../assets/ad2.jpg";
import ad3 from "../assets/ad3.jpg";
import ad4 from "../assets/ad4.jpg";

import axios from "axios";
import data from "../data.json";
const diviceWidth = Dimensions.get("window").width;
import NewMenu from "../components/NewMenu";

export default function HomePage() {
  // const result = axios.get("http://3.36.65.84/menu").then(function (response) {
  //   console.log(response.data.result);
  // });

  // const [data, setData] = useState([]);
  // const readyData = async () => {
  //   const data = await getData();
  //   setData(data);
  // };

  // useEffect(() => {
  //   readyData();
  // }, []);

  let categories = data.result;

  return (
    <Container style={styles.container}>
      <ScrollView>
        <StatusBar style="black" />

        {/* Animated Header안에 들어갈 랜덤으로 바뀌는 인삿말 */}
        <View style={styles.TopMessage}>
          <Text style={styles.toptext}>
            고객님~{"\n"}반갑습니다!
            <Fontisto name="coffeescript" size={24} color="green" />
            {/* <FontAwesome name="coffee" size={24} color="green" /> */}
          </Text>
        </View>

        {/* 추후에 AnimatedHeader안에 들어갈 카드등록 기능을 가진 cardcomponent */}
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

        {/* 최후에 헤더로 고정될 버튼 모음 */}
        <View style={styles.lastheaderbutton}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: "row", marginRight: 15 }}>
            <SimpleLineIcons
              name="envelope-letter"
              size={20}
              color="black"
              style={{ marginRight: 7 }}
            />
            <Text style={{ fontSize: 15 }}>What's New</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="ticket-confirmation-outline"
              size={24}
              color="black"
              style={{ marginRight: 7 }}
            />
            <Text style={{ fontSize: 15 }}>Coupon</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingRight: 23,
            }}>
            <EvilIcons name="bell" size={28} color="black" />
          </TouchableOpacity>
        </View>

        {/* 첫번째 광고, 추후 event페이지로 navigate */}
        <TouchableOpacity style={styles.Addbox}>
          <Image
            source={homead}
            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              padding: 20,
            }}>
            새로 나온 메뉴
          </Text>
        </View>
        {/* ###################가로스크롤 NewMenu ###################*/}
        <ScrollView
          horizontal={true}
          style={styles.newMenu}
          showsHorizontalScrollIndicator={false}>
          {categories.map((category, i) => {
            return <NewMenu category={category} key={i} />;
          })}
        </ScrollView>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              padding: 20,
            }}>
            이 시간대 인기 메뉴
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "grey",
              margin: 20,
              marginLeft: 30,
            }}>
            주중 오후 7시 기준
          </Text>
        </View>
        {/* ###################가로스크롤 NewMenu ###################*/}
        <ScrollView
          horizontal={true}
          style={styles.newMenu}
          showsHorizontalScrollIndicator={false}>
          {categories.map((category, i) => {
            return <NewMenu category={category} key={i} />;
          })}
        </ScrollView>

        {/* 광고들, 마찬가치로 event페이지로 navigate */}
        <TouchableOpacity style={styles.Add2box}>
          <Image
            source={ad2}
            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Add3box}>
          <Image
            source={ad3}
            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Add4box}>
          <Image
            source={ad4}
            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
          />
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
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
    paddingTop: 60,
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
    marginBottom: 5,
    marginTop: 5,
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
  lastheaderbutton: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 30,
    marginBottom: 40,
  },
  Addbox: {
    margin: 20,
    marginBottom: 5,
    marginTop: 5,
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
  newMenu: {
    paddingLeft: 18,
  },
  menuContainer: {},
  Add2box: {
    margin: 20,
    marginBottom: 5,
    marginTop: 5,
    borderBottomColor: "black",
    height: 300,
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
  Add3box: {
    margin: 20,
    marginBottom: 5,
    marginTop: 5,
    borderBottomColor: "black",
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
  Add4box: {
    margin: 20,
    marginBottom: 5,
    marginTop: 5,
    borderBottomColor: "black",
    height: 450,
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
