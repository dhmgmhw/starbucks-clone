import React from 'react';
import { Container, Tab, Tabs } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GiftPage() {
  console.disableYellowBox = true;

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
          heading='선물함'
          activeTextStyle={{ color: 'black', fontWeight: '600' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <View>
            <Ionicons
              style={{ alignSelf: 'center', top: 220 }}
              name={'gift-sharp'}
              color={'grey'}
              size={50}
            />
            <Text
              style={{
                textAlign: 'center',
                marginTop: 220,
                fontSize: 15,
                fontWeight: '600',
                color: 'grey',
              }}>
              e-Gift Item
            </Text>

            <Text
              style={{
                textAlign: 'center',
                marginTop: 40,
                fontSize: 15,
                color: '#868e96',
              }}>
              선물받은 Gift Item을{'\n'}우측 상단 + 버튼을 눌러 등록해보세요.
              {'\n'}
              {'\n'}등록하여 사용하시면,{'\n'}사이렌 오더로 즉시 사용이
              가능하며,{'\n'}유효기간 만료 알림도 받으실 수 있어요.
            </Text>
          </View>
        </Tab>
        <Tab
          heading='홈'
          activeTextStyle={{ color: 'black', fontWeight: '600' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 250,
                fontSize: 22,
                fontWeight: '600',
              }}>
              🚧 공사중... 🚧
            </Text>
          </View>
        </Tab>
        <Tab
          heading='카테고리'
          activeTextStyle={{ color: 'black', fontWeight: '600' }}
          textStyle={{ color: 'grey' }}
          tabStyle={{ backgroundColor: 'white' }}
          activeTabStyle={{ backgroundColor: 'white' }}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 250,
                fontSize: 22,
                fontWeight: '600',
              }}>
              🚧 공사중... 🚧
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
