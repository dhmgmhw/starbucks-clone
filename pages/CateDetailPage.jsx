import React, { useState, useEffect } from "react";
import { Container, Tab, Tabs } from "native-base";
import { StyleSheet, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeaderComponent from "../components/HeaderComponent";
import NoMymenuCard from "../components/NoMymenuCard";
import { getCateDetailData } from "../config/BackData";
import data from "../data.json";
import CateDetailComponent from "../components/CateDatailComponent";

export default function CateDetailPage({ navigation }) {
  console.disableYellowBox = true;

  const [categories, setCategories] = useState(data.result);

  useEffect(() => {
    download();
  }, []);

  const download = async () => {
    const result = await getCateDetailData();
    console.log(result);

    setCategories(result);
  };

  return (
    <Container>
      {/* "콜드브루" 칸에 알맞는 name값 가져오기 - 어떻게?? */}
      <HeaderComponent headerTitle="콜드브루" style={styles.header} />
      <Ionicons
        style={styles.headerIcons1}
        name={"search-outline"}
        color={"grey"}
        size={25}
      />

      <ScrollView>
        {categories.map((category, i) => {
          return (
            <CateDetailComponent
              category={category}
              key={i}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </Container>
  );
}
const styles = StyleSheet.create({
  headerIcons1: {
    position: "absolute",
    top: 60,
    left: 360,
  },
});
