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
import { Container } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

// import { getCateData } from '../config/BackData';

import coffee from "../assets/coffee.png";

export default function DetailPage() {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.imgbox}>
        <Image source={coffee} style={styles.img} />
      </View>

      <View style={styles.namebox}>
        {/* name*/}
        <Text style={styles.name}>미드나잇 베르가못 콜드 브루</Text>
        {/* eng_name */}
        <Text style={styles.en_name}>Midnight Bergamot Cold Brew</Text>
        {/* description */}
        <Text style={{ color: "grey" }}>
          화이트 초콜릿과 화사한 베르가못향이 콜드 브루를 만나 벚꽃이 만발한
          보랏빛 밤을 닮은 미드나잇 베르가못 콜드 브루
        </Text>
        {/* price */}
        <Text style={styles.price}>6,100원</Text>
      </View>

      {/* ice랑 hot 구분 어떻게?? */}
      <View style={styles.icehotbox}>
        <Text style={styles.icehottext}>ICED ONLY</Text>
      </View>

      {/* modal추가하고 주문하면 정보보내주기 */}
      <TouchableOpacity style={styles.orderbox}>
        <Text style={{ color: "white", fontWeight: "bold" }}>주문하기</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgbox: {
    width: 420,
    height: 300,
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  namebox: {
    padding: 20,
  },
  name: {
    fontSize: 25,
    fontWeight: "700",
  },
  en_name: {
    color: "darkgrey",
    paddingBottom: 10,
  },
  price: {
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: 25,
  },
  icehotbox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E90FF",
    width: 370,
    height: 40,
    margin: 20,

    borderRadius: 20,
  },
  icehottext: {
    color: "white",
    fontWeight: "bold",
  },
  orderbox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3CB371",
    width: 370,
    height: 40,
    margin: 20,
    borderRadius: 20,
  },
});
