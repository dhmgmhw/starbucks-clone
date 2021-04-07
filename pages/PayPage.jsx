import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderComponent from '../components/HeaderComponent';

export default function PayPage() {
  return (
    <ScrollView style={styles.container}>
      <HeaderComponent headerTitle='Pay' />
      <View style={styles.card}>
        <View style={styles.creditCard}>
          <Ionicons name='add-circle-outline' size={45} style={styles.icon} />
        </View>
        <Text style={styles.cardText}>스타벅스 카드를 등록해보세요.</Text>
        <Text style={styles.cardTextDesc}>
          매장과 사이렌오더에서 쉽고 편리하게{'\n'}사용할 수 있고, 별도 적립할
          수 있습니다.
        </Text>
      </View>
      <View style={styles.BtnBox}>
        <TouchableOpacity
          style={{ borderRightWidth: 1, borderColor: 'lightgrey' }}>
          <Text style={styles.BtnBoxText}>Coupon</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.BtnBoxText}>Gift Item</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    marginTop: 100,
    marginLeft: 20,
  },
  headerText: {
    fontWeight: '600',
    fontSize: 30,
  },
  card: {
    backgroundColor: 'white',
    marginTop: 25,
    height: 470,
    width: 380,
    alignSelf: 'center',
    shadowColor: 'lightgrey',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },
  creditCard: {
    backgroundColor: '#F6F6F6',
    marginTop: 25,
    height: 200,
    width: 330,
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 15,
    borderStyle: 'dashed',
    borderColor: '#bdc3c7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 50,
    width: 50,
    color: '#bdc3c7',
    padding: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 15,
  },
  cardTextDesc: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'center',
  },
  BtnBox: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 60,
  },
  BtnBoxText: {
    fontSize: 15,
    fontWeight: '600',
    paddingHorizontal: 70,
  },
});
