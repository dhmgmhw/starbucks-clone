import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function NoMymenuCard() {
  return (
    <View>
      <View style={styles.myMenu}>
        <Text style={styles.myMenuTitle}>등록된 나만의 메뉴가 없습니다.</Text>
        <Text style={styles.myMenuDesc}>
          {'\n'}좋아하는 메뉴에 💚를 누르고 편리하게{'\n'}주문해 보세요.
          {'\n'}
        </Text>
        <Image
          style={styles.myMenuImg}
          resizeMode='contain'
          source={require('../assets/mymenu.png')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  myMenuTitle: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 50,
    paddingTop: 90,
  },
  myMenuDesc: {
    paddingLeft: 50,
    color: 'grey',
    fontSize: 15,
    lineHeight: 22,
  },
  myMenuImg: {
    height: 300,
    width: 300,
    alignSelf: 'center',
  },
});
