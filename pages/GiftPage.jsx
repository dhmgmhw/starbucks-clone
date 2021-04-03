import React from 'react';
import { Container, Tab, Tabs } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';

export default function GiftPage() {
  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.headerText}>Gift</Text>
      </View>
      <Tabs locked={true} tabBarUnderlineStyle={{ backgroundColor: '#3AB27B' }}>
        <Tab
          heading='홈'
          activeTextStyle={{ color: 'Black', fontWeight: 'bold' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <View>
            <Text>Good</Text>
          </View>
        </Tab>
        <Tab
          heading='카테고리'
          activeTextStyle={{ color: 'Black', fontWeight: 'bold' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <View>
            <Text>Good2</Text>
          </View>
        </Tab>
        <Tab
          heading='선물함'
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
    height: 100,
  },
  headerText: {
    paddingTop: 60,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
