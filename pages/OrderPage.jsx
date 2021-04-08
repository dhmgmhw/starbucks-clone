import React, { useState, useEffect } from "react";
import { Container, Tab, Tabs } from "native-base";
import { StyleSheet, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeaderComponent from "../components/HeaderComponent";
import NoMymenuCard from "../components/NoMymenuCard";
import { getCateData } from "../config/BackData";
import data from "../data.json";
import CateComponent from "../components/CateComponent";
import WholeCakeComponent from "../components/WholeCakeComponent";

export default function OrderPage({ navigation }) {
  console.disableYellowBox = true;
  const [categories, setCategories] = useState(data.result);
  const cake = data.cake;

  useEffect(() => {
    download();
  }, []);

  const download = async () => {
    const result = await getCateData();

    setCategories(result);
  };

  return (
    <Container>
      <HeaderComponent headerTitle="Order" />
      <Ionicons
        style={styles.headerIcons1}
        name={"search-outline"}
        color={"grey"}
        size={25}
      />
      <Tabs locked={true} tabBarUnderlineStyle={{ backgroundColor: "#3AB27B" }}>
        <Tab
          heading="전체 메뉴"
          activeTextStyle={{ color: "black", fontWeight: "600" }}
          textStyle={{ color: "grey" }}
          tabStyle={{ backgroundColor: "#FFFFFF" }}
          activeTabStyle={{ backgroundColor: "#FFFFFF" }}>
          <ScrollView>
            {categories.map((category, i) => {
              return (
                <CateComponent
                  category={category}
                  key={i}
                  navigation={navigation}
                />
              );
            })}
          </ScrollView>
        </Tab>
        <Tab
          heading="나만의 메뉴"
          activeTextStyle={{ color: "black", fontWeight: "600" }}
          textStyle={{ color: "grey" }}
          tabStyle={{ backgroundColor: "#FFFFFF" }}
          activeTabStyle={{ backgroundColor: "#FFFFFF" }}>
          <NoMymenuCard />
        </Tab>
        <Tab
          heading="홀케이크 예약"
          activeTextStyle={{ color: "black", fontWeight: "600" }}
          textStyle={{ color: "grey" }}
          tabStyle={{ backgroundColor: "#FFFFFF" }}
          activeTabStyle={{ backgroundColor: "#FFFFFF" }}>
          <ScrollView>
            {cake.map((cake, i) => {
              return <WholeCakeComponent cake={cake} key={i} />;
            })}
          </ScrollView>
        </Tab>
      </Tabs>
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
