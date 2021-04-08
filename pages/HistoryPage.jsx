import React from 'react';
import { Container, Tab, Tabs } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';

export default function HistoryPage() {
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
          <View>
            <Text
            style={{
              textAlign: 'center',
              marginTop: 250,
              fontSize: 16,
            }}>
            히스토리가 없습니다.
            </Text>
          </View>
        </Tab>
        <Tab
          heading='홀케이크 선물/예약'
          activeTextStyle={{ color: 'black', fontWeight: '600' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 250,
                fontSize: 16,
              }}>
              히스토리가 없습니다.
            </Text>
          </View>
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
});
