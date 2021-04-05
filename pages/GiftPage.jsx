import React from 'react';
import { Container, Tab, Tabs } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GiftPage() {
  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.headerText}>Gift</Text>
      </View>
      <Ionicons
        style={styles.headerIcons1}
        name={'basket-outline'}
        color={'grey'}
        size={20}
      />
      <Ionicons
        style={styles.headerIcons2}
        name={'search'}
        color={'grey'}
        size={20}
      />

      <Tabs locked={true} tabBarUnderlineStyle={{ backgroundColor: '#3AB27B' }}>
        <Tab
          heading='홈'
          activeTextStyle={{ color: 'black', fontWeight: '600' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <View>
            <Text>Good</Text>
          </View>
        </Tab>
        <Tab
          heading='카테고리'
          activeTextStyle={{ color: 'black', fontWeight: '600' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <View>
            <Text>Good2</Text>
          </View>
        </Tab>
        <Tab
          heading='선물함'
          activeTextStyle={{ color: 'black', fontWeight: '600' }}
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
  headerIcons1: {
    position: 'absolute',
    top: 60,
    left: 370,
  },
  headerIcons2: {
    position: 'absolute',
    top: 60,
    left: 340,
  },
});
