import React, { useState, useEffect } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native';
import HistoriesComponent from '../components/HistoriesComponent';
import HistoriesComponentColor from '../components/HistoriesComponentColor';
import { getHistory } from '../config/BackData';
import data from '../data.json';
const diviceWidth = Dimensions.get('window').width;

export default function HistoryPage({ navigation }) {
  console.disableYellowBox = true;
  const [history, setHistory] = useState(data.order);

  useEffect(() => {
    download();
  }, []);

  const download = async () => {
    const result = await getHistory();
    setHistory(result);
  };

  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.headerText}>히스토리</Text>
      </View>
      <Tabs locked={true} tabBarUnderlineStyle={{ backgroundColor: '#3AB27B' }}>
        <Tab
          heading='메뉴 주문'
          activeTextStyle={{ color: 'black', fontWeight: '600' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <ScrollView>
            {history.map((history, i) => {
              return i % 2 == 0 ? (
                <HistoriesComponentColor
                  history={history}
                  key={i}
                  navigation={navigation}
                />
              ) : (
                <HistoriesComponent
                  history={history}
                  key={i}
                  navigation={navigation}
                />
              );
            })}
          </ScrollView>
        </Tab>
        <Tab
          heading='홀케이크 선물/예약'
          activeTextStyle={{ color: 'black', fontWeight: '600' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <ScrollView>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 250,
                fontSize: 16,
              }}>
              히스토리가 없습니다.
            </Text>
          </ScrollView>
        </Tab>
      </Tabs>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  headerText: {
    paddingTop: 60,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    width: diviceWidth,
    height: 110,
    backgroundColor: 'lightgrey',
    flexDirection: 'column',
  },
  cardImgBox: { width: 30, height: 30 },
  cardImg: {
    width: 30,
    height: 30,
  },
  cardDesc: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
  },
});
