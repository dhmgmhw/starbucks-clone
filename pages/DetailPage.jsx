import React, { useState, useEffect } from 'react';
import { Container, Footer, Button } from 'native-base';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Alert,
  Modal,
} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import NumericInput, { calcSize } from 'react-native-numeric-input';
import { Ionicons } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';

import Loading from './Loading';
import HeaderComponent from '../components/HeaderComponent';

import data from '../data.json';
import { getMenuDetailData } from '../config/BackData';

import { placeOrder } from '../config/BackData';
// import { getCateData } from '../config/BackData';

export default function DetailPage({ navigation, route }) {
  const menu = route.params;
  let price = menu.price;

  const [ready, setReady] = useState(false);
  const [categories, setCategories] = useState(data.result);

  const [modalOpen, setModalOpen] = useState(false);

  const [manu, setManu] = useState(menu._id);
  const [size, setSize] = useState('Tall');
  const [cup, setCup] = useState('개인컵');
  const [num, setNum] = useState(1);

  const doOrder = () => {
    placeOrder(manu, size, cup, num);
    setModalOpen(false);
    Alert.alert('주문이 완료되었습니다!');
  };

  useEffect(() => {
    setTimeout(() => {
      download();
      setReady(true);
    });
  }, []);

  const download = async () => {
    const result = await getMenuDetailData(cate._id);
    setCategories(result);
  };
  let allergy = menu.allergy == 'none' ? '' : menu.allergy;
  return (
    <Container>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={styles.imgbox}>
          <Image source={{ uri: menu.image }} style={styles.img} />
        </View>

        <View style={styles.namebox}>
          <Text style={styles.name}>{menu.name}</Text>
          <Text style={styles.en_name}>{menu.eng_name}</Text>
          <Text style={{ color: 'grey' }}>{menu.description}</Text>
          <Text style={styles.price}>{price}원 </Text>
        </View>

        {/* ice랑 hot 구분 어떻게?? */}
        <View style={styles.icehotbox}>
          <View style={styles.hotbox}>
            <Text style={styles.icehottext}>HOT</Text>
          </View>
          <View style={styles.icebox}>
            <Text style={styles.icehottext}>ICED</Text>
          </View>
        </View>

        {/* 알레르기 요인 'none'일 때 표기없애기 */}
        <View style={styles.allergy}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            알레르기 유발 요인
          </Text>
          <Text>{allergy}</Text>
        </View>
      </ScrollView>

      {/* modal */}
      <Footer style={styles.footer}>
        <Modal style={styles.modal} visible={modalOpen} animationType='slide'>
          <ScrollView style={{ padding: 30 }}>
            <Ionicons
              name='chevron-back'
              size={40}
              color='grey'
              onPress={() => setModalOpen(false)}
            />

            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                padding: 20,
                paddingTop: 30,
              }}>
              {menu.name}
            </Text>

            <View style={{ backgroundColor: '#EFFBF8' }}>
              <Text
                style={{
                  textAlign: 'center',
                  padding: 10,
                  color: 'green',
                  fontSize: 12,
                }}>
                환경을 위해 일회용컵 사용 줄이기에 동참해 주세요
              </Text>
            </View>

            <Text style={{ fontSize: 23, fontWeight: 'bold', marginTop: 50 }}>
              사이즈
            </Text>
            <View style={styles.sizebox}>
              <Image
                source={require('../assets/size.png')}
                style={{
                  height: 200,
                  width: 350,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <SwitchSelector
              options={[
                { label: 'Tall', value: 'Tall' },
                { label: 'Grande', value: 'Grande' },
                { label: 'Venti', value: 'Venti' },
              ]}
              initial={0}
              onPress={(value) => setSize(value)}
            />

            <Text
              style={{
                fontSize: 23,
                fontWeight: 'bold',
                marginTop: 50,
                marginBottom: 10,
              }}>
              컵 선택
            </Text>
            <SwitchSelector
              options={[
                { label: '매장컵', value: '매장컵' },
                { label: '개인컵', value: '개인컵' },
                { label: '일회용컵', value: '일회용컵' },
              ]}
              initial={0}
              onPress={(value) => setCup(value)}
            />
            <Text
              style={{
                textAlign: 'right',
                fontSize: 25,
                fontWeight: 'bold',
                paddingTop: 75,
                top: 35,
              }}>
              {price * num}원
            </Text>
            <NumericInput
              // value={num}
              onChange={(value) => setNum(value)}
              minValue={0}
              totalWidth={200}
              valueType='integer'
              rounded
              iconStyle={{ color: 'white' }}
              rightButtonBackgroundColor='#3CB371'
              leftButtonBackgroundColor='#3CB371'
              sepratorWidth={0.6}
              totalHeight={40}
            />
          </ScrollView>
          <Footer style={styles.footer}>
            <Button style={styles.orderbox1} onPressOut={doOrder}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                주문하기
              </Text>
            </Button>
          </Footer>
        </Modal>

        <Button style={styles.orderbox} onPress={() => setModalOpen(true)}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>주문하기</Text>
        </Button>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  imgbox: {
    width: 420,
    height: 300,
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  namebox: {
    padding: 20,
  },
  name: {
    fontSize: 25,
    fontWeight: '700',
  },
  en_name: {
    color: 'darkgrey',
    paddingBottom: 10,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 25,
  },
  icehotbox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    // backgroundColor: "#1E90FF",
    width: 370,
    height: 40,
    margin: 20,
    marginBottom: 60,
    borderRadius: 20,
  },
  hotbox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
  },
  icebox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icehottext: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderbox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3CB371',
    width: 370,
    height: 40,
    margin: 20,
    borderRadius: 20,
  },
  footer: {
    borderTopWidth: 0,
    margin: 10,
    backgroundColor: 'white',
    borderBottomWidth: 0,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0,
    marginBottom: 40,
  },
  modal: {
    padding: 30,
    marginTop: 100,
  },
  sizebox: {
    height: 170,
  },
  allergy: {
    padding: 20,
    borderTopWidth: 0.5,
    borderColor: 'grey',
  },
  modaltoggle: {
    width: 120,
    height: 30,
    backgroundColor: 'grey',
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 1,
    alignSelf: 'center',
  },
  orderbox1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3CB371',
    width: 370,
    height: 40,
    margin: 20,
    borderRadius: 20,
  },
});
