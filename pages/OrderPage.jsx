import React, { useState, useEffect } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderComponent from '../components/HeaderComponent';
import { getData } from '../config/BackData';

export default function OrderPage() {
  console.disableYellowBox = true;

  const [data, setData] = useState([]);
  const readyData = async () => {
    const data = await getData();
    setData(data);
  };

  useEffect(() => {
    readyData();
  }, []);

  return (
    <Container>
      <HeaderComponent headerTitle='Order' />
      <Ionicons
        style={styles.headerIcons1}
        name={'search-outline'}
        color={'grey'}
        size={25}
      />
      <Tabs locked={true} tabBarUnderlineStyle={{ backgroundColor: '#3AB27B' }}>
        <Tab
          heading='전체 메뉴'
          activeTextStyle={{ color: 'black', fontWeight: '600' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <ScrollView>
            {/* {data.map((menu, i) => {
            return(
            <Text key={i}>{menu}</Text>
            ));
            } */}
          </ScrollView>
        </Tab>
        <Tab
          heading='나만의 메뉴'
          activeTextStyle={{ color: 'black', fontWeight: '600' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <View>
            <Text>등록된 나만의 메뉴가 없습니다.</Text>
            <Text>좋아하는 메뉴에 💚를 누르고 편리하게 주문해 보세요.</Text>
          </View>
        </Tab>
        <Tab
          heading='홀케이크 예약'
          activeTextStyle={{ color: 'black', fontWeight: '600' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <ScrollView>
            <Text>Good3</Text>
          </ScrollView>
        </Tab>
      </Tabs>
    </Container>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop: 100,
    marginLeft: 20,
  },
  headerText: {
    fontWeight: '600',
    fontSize: 30,
  },
  headerIcons1: {
    position: 'absolute',
    top: 60,
    left: 360,
  },
});
