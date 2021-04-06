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

import coffee from "../assets/coffee.png";

export default function DetailPage() {
  return (
    // <ScrollView>
    <Grid>
      <Row size={4}>
        {/* <View style={styles.imgbox}> */}
        <Image source={coffee} style={styles.img} />
        {/* </View> */}
      </Row>

      <Row size={6}>
        <View style={styles.namebox}>
          {/* 제품 한글이름 */}
          <Text style={styles.name}>미드나잇 베르가못 콜드 브루</Text>
          {/* 제품 영어이름 */}
          <Text style={styles.en_name}>Midnight Bergamot Cold Brew</Text>
          {/* 제품 설명 */}
          <Text style={{ color: "grey" }}>
            화이트 초콜릿과 화사한 베르가못향이 콜드 브루를 만나 벚꽃이 만발한
            보랏빛 밤을 닮은 미드나잇 베르가못 콜드 브루
          </Text>
        </View>

        {/* 제품가격 */}
        <Text>7,500원</Text>
      </Row>
    </Grid>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgbox: {
    // width: 420,
    // height: 350,
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  namebox: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  name: {
    fontSize: 25,
    fontWeight: "700",
  },
  en_name: {
    color: "darkgrey",
  },
});
