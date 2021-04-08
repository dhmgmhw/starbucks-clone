import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Alert,
  AsyncStorage,
  Image,
  Dimensions,
  View,
} from 'react-native';
import { Container, Text, Button } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import { placeOrder } from '../config/BackData';
import HeaderComponent from '../components/HeaderComponent';

const diviceWidth = Dimensions.get('window').width;
const diviceHeight = Dimensions.get('window').height;

export default function OrderConfirmPage({ navigation }) {
  const orderDrink = () => {
    placeOrder();
    Alert.alert('주문을 완료했습니다!');
    navigation.navigate('TabNavigator');
  };

  return (
    <Container style={styles.container}>
      <StatusBar style='black' />
      <HeaderComponent headerTitle='결제하기' />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 40,
        }}>
        <Text style={styles.subTitle}>결제수단</Text>
        <Text style={styles.subTitle}></Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 20,
        }}>
        <Ionicons name={'card'} color={'#aeaeae'} size={45} />
        <Text style={styles.subTitleCard}>신용카드</Text>
        <Ionicons name={'chevron-forward'} color={'grey'} size={30} />
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: 'lightgrey',
          marginLeft: 40,
          marginTop: 20,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 20,
          marginBottom: 30,
        }}>
        <Text style={styles.subTitle}>쿠폰 및 할인</Text>
        <Ionicons name={'chevron-down'} color={'grey'} size={30} />
      </View>
      <View
        style={{
          backgroundColor: '#f1f3f5',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 20,
          }}>
          <Text style={styles.subTitle}>주문내역</Text>
          <Ionicons name={'chevron-down'} color={'grey'} size={30} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom: 20,
          }}>
          <Image
            resizeMode={'contain'}
            source={require('../assets/logo.png')}
            style={styles.coffee}
          />
          <Text style={styles.smallTitle}>카페 아메리카노</Text>
          <Ionicons name={'chevron-down'} color={'#f1f3f5'} size={30} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 30,
          marginBottom: 20,
        }}>
        <Text style={styles.smallTitle}>주문 금액</Text>
        <Text style={styles.smallTitle}>얼마얼마</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 20,
          marginBottom: 20,
        }}>
        <Text style={styles.smallTitle}>할인 금액</Text>
        <Text style={styles.smallTitle}>0 원</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginTop: 30,
          marginBottom: 20,
        }}>
        <Text style={styles.subTitle}>최종 결제 금액</Text>
        <Text style={styles.subTitle}>얼마얼마</Text>
      </View>

      <View style={styles.footer}>
        <Button full style={styles.orderBtn} onPress={orderDrink}>
          <Text>얼마얼마 결제하기</Text>
        </Button>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingLeft: 20,
    fontSize: 25,
    fontWeight: '700',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  subTitleCard: {
    fontSize: 20,
    fontWeight: '600',
    right: 100,
  },
  smallTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  orderBtn: {
    alignSelf: 'center',
    width: diviceWidth * 0.9,
    marginBottom: 30,
    borderRadius: 100,
    backgroundColor: '#3AB27B',
  },
  border: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginLeft: 40,
  },
  footer: {
    position: 'absolute',
    alignSelf: 'center',
    top: diviceHeight * 0.9,
  },
  coffee: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 30,
  },
});
