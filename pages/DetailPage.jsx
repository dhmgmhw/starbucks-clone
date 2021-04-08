import React, { useState, useEffect } from "react";
import { Container } from "native-base";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import Loading from "./Loading";
import HeaderComponent from "../components/HeaderComponent";

import data from "../data.json";
import { getMenuDetailData } from "../config/BackData";

// import { getCateData } from '../config/BackData';

export default function DetailPage({ navigation, route }) {
  const menu = route.params;
  let price = menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const [ready, setReady] = useState(false);
  const [categories, setCategories] = useState(data.result);

  useEffect(() => {
    setTimeout(() => {
      download();
      setReady(true);
    });
  }, []);

  const download = async () => {
    const result = await getMenuDetailData(cate._id);

    setCategories(result);
  };
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      {/* image */}
      <View style={styles.imgbox}>
        <Image source={{ uri: menu.image }} style={styles.img} />
      </View>

      <View style={styles.namebox}>
        {/* name*/}
        <Text style={styles.name}>{menu.name}</Text>
        {/* eng_name */}
        <Text style={styles.en_name}>{menu.eng_menu}</Text>
        {/* description */}
        <Text style={{ color: "grey" }}>{menu.description}</Text>
        {/* price */}
        <Text style={styles.price}>{price}원 </Text>
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
    borderWidth: 1,
    borderColor: "grey",
    // backgroundColor: "#1E90FF",
    width: 370,
    height: 40,
    margin: 20,

    borderRadius: 20,
  },
  icehottext: {
    color: "black",
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
