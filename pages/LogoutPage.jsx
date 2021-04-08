import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Col, Grid } from "react-native-easy-grid";
import { ScrollView } from "react-native-gesture-handler";
import LogoutComponent from "../components/LogoutComponent";
import { logout } from "../config/BackData";
import { getUserInfo } from "../config/BackData";
import { Ionicons } from "@expo/vector-icons";

export default function LogoutPage({ navigation }) {
  const logoutFunc = () => {
    logout(navigation);
  };

  const [nickName, setNickName] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    runWhenPageLoad();
  }, []);

  const runWhenPageLoad = async () => {
    const response = await getUserInfo();
    setNickName(response.nickName);
    setUserId(response.userId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>설정</Text>
      </View>
      <ScrollView showsScrollIndicator={false} style={styles.mainContainer}>
        <Grid style={styles.userInfo}>
          <Col style={{ paddingLeft: 30 }} size={2}>
            <Text style={styles.userNick}>{nickName}</Text>
            <Text style={styles.userId}>{userId}</Text>
          </Col>
          <Col size={1}>
            <TouchableOpacity onPress={logoutFunc}>
              <View style={styles.lououtBtn}>
                <Text style={styles.lououtText}>로그아웃</Text>
              </View>
            </TouchableOpacity>
          </Col>
        </Grid>

        <View>
          <Text style={styles.subHeader}>계정정보</Text>
        </View>
        <TouchableOpacity>
          <Grid style={styles.header}>
            <Col size={5}>
              <Text style={styles.subHeaderText}>닉네임</Text>
            </Col>
            <Col size={3}>
              <Text style={styles.subDescText}>{nickName}</Text>
            </Col>
            <Col size={1}>
              <Ionicons name={"chevron-forward"} color={"grey"} size={25} />
            </Col>
          </Grid>
        </TouchableOpacity>
        <LogoutComponent
          subHeader={"개인컵 리워드 설정"}
          subDesc={"300원 할인"}
        />
        <LogoutComponent subHeader={"My DT Pass"} subDesc={"OFF"} />
        <LogoutComponent subHeader={`연결된 서비스 관리`} subDesc={""} />
        <LogoutComponent subHeader={"임직원 번호 관리"} subDesc={""} />
        <View style={styles.border}></View>
        <View>
          <Text style={styles.subHeader}>권한 설정</Text>
        </View>
        <LogoutComponent subHeader={"푸시 알림"} subDesc={"OFF"} />
        <LogoutComponent
          subHeader={"위치 정보 서비스 이용약관 동의"}
          subDesc={""}
        />
        <View style={styles.border}></View>
        <View>
          <Text style={styles.subHeader}>기타 관리</Text>
        </View>
        <LogoutComponent subHeader={"암호 설정"} subDesc={""} />
        <LogoutComponent subHeader={"버전 정보"} subDesc={""} />
        <View style={styles.border}></View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            fontWeight: "600",
            marginVertical: 30,
          }}>
          회원탈퇴
        </Text>
        <View style={styles.bottomBlock}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    height: 100,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  userNick: {
    fontSize: 25,
    fontWeight: "600",
  },
  userId: {
    fontSize: 15,
    marginTop: 10,
  },
  container: {
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "white",
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  headerText: {
    paddingTop: 60,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },

  mainContainer: {
    backgroundColor: "white",
  },
  subHeader: {
    fontSize: 19,
    fontWeight: "600",
    padding: 30,
  },
  border: {
    height: 1,
    backgroundColor: "lightgrey",
    marginLeft: 40,
  },
  bottomBlock: {
    height: 140,
  },
  lououtBtn: {
    borderWidth: 1,
    borderColor: "#3AB27B",
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  lououtText: {
    fontSize: 15,
    color: "#3AB27B",
    fontWeight: "700",
  },

  // 로그아웃 컴포넌트
  header: {
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 10,
    marginVertical: 6,
    padding: 10,
  },
  subHeaderText: {
    marginLeft: 3,
    fontSize: 16,
    paddingTop: 6,
  },
  subDescText: {
    marginLeft: 3,
    paddingRight: 13,
    fontSize: 14,
    fontWeight: "700",
    color: "grey",
    paddingTop: 6,
    textAlign: "right",
  },
});
