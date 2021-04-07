import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { Col, Grid } from "react-native-easy-grid";

import CateDetailPage from "../pages/CateDetailPage";

const diviceWidth = Dimensions.get("window").width;

export default function CateComponent({ navigation, category }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("CateDetailPage", category.name);
      }}>
      <Grid style={styles.cate}>
        <Col size={1}>
          <Image
            style={styles.cardImage}
            resizeMode="cover"
            source={{ uri: category.image }}
          />
        </Col>
        <Col size={2} style={styles.cardText}>
          <Text style={styles.cardTitle}>{category.name}</Text>
          <Text style={styles.cardEnTitle}>{category.eng_name}</Text>
        </Col>
      </Grid>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cate: {
    height: 100,
    width: 100,
    width: diviceWidth * 0.9,
    alignSelf: "center",
    marginVertical: 15,
    flex: 1,
    alignItems: "center",
  },
  cardImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: "500",
    marginBottom: 5,
  },
  cardEnTitle: {
    fontSize: 13,
    color: "lightgrey",
    fontWeight: "500",
  },
});
