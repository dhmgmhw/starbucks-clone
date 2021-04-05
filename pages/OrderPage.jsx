import React, { useState, useEffect } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import { StyleSheet, Text, ScrollView, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderComponent from '../components/HeaderComponent';
import NoMymenuCard from '../components/NoMymenuCard';
// import { getData } from '../config/BackData';
import data from '../data.json';
const diviceWidth = Dimensions.get('window').width;
import CateComponent from '../components/CateComponent';

// import axios from 'axios';

export default function OrderPage({ navigation }) {
  console.disableYellowBox = true;
  let categories = data.result;

  // const getData = async () => {
  //   try {
  //     const response = await axios.get('http://3.36.65.84/menu');
  //     alert(JSON.stringify(response.data));
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

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
          heading='나만의 메뉴'
          activeTextStyle={{ color: 'black', fontWeight: '600' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <NoMymenuCard />
        </Tab>
        <Tab
          heading='홀케이크 예약'
          activeTextStyle={{ color: 'black', fontWeight: '600' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <ScrollView>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 250,
                fontSize: 22,
                fontWeight: '600',
              }}>
              🚧 공사중... 🚧
            </Text>
          </ScrollView>
        </Tab>
      </Tabs>
    </Container>
  );
}
const styles = StyleSheet.create({
  headerIcons1: {
    position: 'absolute',
    top: 60,
    left: 360,
  },
});
