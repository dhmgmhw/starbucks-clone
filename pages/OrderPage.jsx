import React from 'react';
import { Container, Tab, Tabs } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderPage() {
  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.headerText}>Order</Text>
      </View>
      <Ionicons
        style={styles.headerIcons1}
        name={'search-outline'}
        color={'grey'}
        size={25}
      />
      <Tabs locked={true} tabBarUnderlineStyle={{ backgroundColor: '#3AB27B' }}>
        <Tab
          heading='전체 메뉴'
          activeTextStyle={{ color: '#3AB27B', fontWeight: 'bold' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <View>
            <Text>Good</Text>
          </View>
        </Tab>
        <Tab
          heading='나만의 메뉴'
          activeTextStyle={{ color: 'Black', fontWeight: 'bold' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <View>
            <Text>Good2</Text>
          </View>
        </Tab>
        <Tab
          heading='홀케이크 예약'
          activeTextStyle={{ color: 'Black', fontWeight: 'bold' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <View>
            <Text>Good3</Text>
          </View>
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
