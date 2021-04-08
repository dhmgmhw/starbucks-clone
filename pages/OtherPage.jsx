import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import OtherItemCard from '../components/OtherItemCard';
import OtherHeaderComponent from '../components/OtherHeaderComponent';
import { Col, Grid } from 'react-native-easy-grid';

export default function OtherPage({ navigation }) {
  return (
    <View style={styles.container}>
      <OtherHeaderComponent headerTitle='Other' />
      <TouchableOpacity
        style={styles.headerIcons}
        onPress={() => navigation.navigate('LogoutPage')}>
        <Ionicons name={'settings-outline'} color={'grey'} size={20} />
      </TouchableOpacity>
      <ScrollView showsScrollIndicator={false} style={styles.mainContainer}>
        <View>
          <Text style={styles.subHeader}>서비스</Text>
        </View>
        <OtherItemCard subHeader={'리워드'} icon={'star-outline'} />
        <OtherItemCard subHeader={'쿠폰'} icon={'cash-outline'} />
        <OtherItemCard subHeader={'e-기프트 카드'} icon={'card-outline'} />
        <OtherItemCard subHeader={`What's New`} icon={'mail-outline'} />
        <OtherItemCard subHeader={'알림'} icon={'notifications-outline'} />
        <TouchableOpacity onPress={() => navigation.navigate('HistoryPage')}>
          <Grid style={styles.hisHeader}>
            <Col size={1}>
              <Ionicons name={'timer-outline'} color={'grey'} size={25} />
            </Col>
            <Col size={7}>
              <Text style={styles.hisHeaderText}>히스토리</Text>
            </Col>
            <Col size={1}>
              <Ionicons name={'chevron-forward'} color={'grey'} size={25} />
            </Col>
          </Grid>
        </TouchableOpacity>
        <OtherItemCard subHeader={'전자영수증'} icon={'receipt-outline'} />
        <OtherItemCard subHeader={'마이 스타벅스 리뷰'} icon={'cafe-outline'} />
        <View style={styles.border}></View>
        <View>
          <Text style={styles.subHeader}>고객 지원</Text>
        </View>
        <OtherItemCard subHeader={'스토어 케어'} icon={'trail-sign-outline'} />
        <OtherItemCard subHeader={'고객의 소리'} icon={'nuclear-outline'} />
        <OtherItemCard subHeader={'매장 정보'} icon={'location-outline'} />
        <View style={styles.border}></View>

        <View>
          <Text style={styles.subHeader}>약관 및 정책</Text>
        </View>
        <OtherItemCard subHeader={'이용약관'} icon={'reader-outline'} />
        <OtherItemCard
          subHeader={'개인정보 처리 방침'}
          icon={'lock-closed-outline'}
        />
        <View style={styles.bottomBlock}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  headerIcons: {
    position: 'absolute',
    top: 60,
    left: 370,
  },
  header: {
    height: 90,
    backgroundColor: 'white',
  },
  headerText: {
    paddingTop: 60,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  mainContainer: {
    backgroundColor: 'white',
  },
  subHeader: {
    fontSize: 19,
    fontWeight: '600',
    padding: 30,
  },
  border: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginLeft: 40,
  },
  bottomBlock: {
    height: 140,
  },

  hisHeader: {
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 10,
    marginVertical: 6,
    padding: 10,
  },
  hisHeaderText: {
    marginLeft: 3,
    fontSize: 16,
    paddingTop: 6,
  },
});
