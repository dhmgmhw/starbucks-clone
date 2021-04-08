import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container } from 'native-base';
import { ProgressBar, Colors } from 'react-native-paper';
import { Col, Grid } from 'react-native-easy-grid';

import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import homead from '../assets/homead.png';
import ad2 from '../assets/ad2.jpg';
import ad3 from '../assets/ad3.jpg';
import ad4 from '../assets/ad4.jpg';

import data from '../data.json';
import { getUserInfo } from '../config/BackData';

const diviceWidth = Dimensions.get('window').width;

import NewMenu from '../components/NewMenu';

import { getNewMenuData } from '../config/BackData';

export default function HomePage({ navigation }) {
  const [categories, setCategories] = useState(data.result);
  const [nickName, setNickName] = useState('');
  const [star, setStar] = useState(0);
  const starLeft = 12 - star;
  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });

    download();
  }, []);

  const download = async () => {
    const result = await getNewMenuData();
    const response = await getUserInfo();
    setNickName(response.nickName);
    setStar(response.star);

    setCategories(result);
  };

  return (
    <Container style={styles.container}>
      <ScrollView>
        <StatusBar style='black' />

        {/* 추후에 AnimatedHeader안에 들어갈 카드등록 기능을 가진 cardcomponent */}
        <ImageBackground
          source={require('../assets/back.png')}
          style={styles.makecard}>
          <Text style={styles.toptext}>
            {nickName}님🌸{'\n'}체리블라썸이 찾아왔어요!
          </Text>
          <Grid style={{ marginTop: 20 }}>
            <Col style={{ paddingRight: 10 }} size={4}>
              <Text style={styles.starLeftReward}>
                {starLeft} ★ until next Reward
              </Text>
              <ProgressBar
                style={styles.ProgressBar}
                progress={star * 0.083}
                color={'#B99C5C'}
              />
            </Col>
            <Col
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                paddingRight: 30,
              }}
              size={1}>
              <Text style={{ fontSize: 35, fontWeight: '500' }}>{star}</Text>
              <Text style={styles.starLeftText}> / 12★</Text>
            </Col>
          </Grid>
        </ImageBackground>

        {/* 최후에 헤더로 고정될 버튼 모음 */}
        <View style={styles.lastheaderbutton}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: 'row', marginRight: 15 }}>
            <SimpleLineIcons
              name='envelope-letter'
              size={20}
              color='black'
              style={{ marginRight: 7 }}
            />
            <Text style={{ fontSize: 15 }}>What's New</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
            <MaterialCommunityIcons
              name='ticket-confirmation-outline'
              size={24}
              color='black'
              style={{ marginRight: 7 }}
            />
            <Text style={{ fontSize: 15 }}>Coupon</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              paddingRight: 23,
            }}>
            <EvilIcons name='bell' size={28} color='black' />
          </TouchableOpacity>
        </View>

        {/* 첫번째 광고, 추후 event페이지로 navigate */}
        <TouchableOpacity style={styles.Addbox}>
          <Image
            source={homead}
            style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: 'bold',
              padding: 20,
            }}>
            새로 나온 메뉴
          </Text>
        </View>

        {/* ###################가로스크롤 NewMenu ###################*/}
        <ScrollView
          horizontal={true}
          style={styles.newMenu}
          showsHorizontalScrollIndicator={false}>
          {categories.map((category, i) => {
            return <NewMenu category={category} key={i} />;
          })}
        </ScrollView>

        {/* <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}>
          <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              padding: 20,
            }}>
            이 시간대 인기 메뉴
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "grey",
              margin: 20,
              marginLeft: 30,
            }}>
            주중 오후 7시 기준
          </Text>
        </View>
        ###################가로스크롤 NewMenu ###################
        <ScrollView
          horizontal={true}
          style={styles.newMenu}
          showsHorizontalScrollIndicator={false}>
          {categories.map((category, i) => {
            return <NewMenu category={category} key={i} />;
          })}
        </ScrollView> */}

        {/* 광고들, 마찬가치로 event페이지로 navigate */}
        <TouchableOpacity style={styles.Add2box}>
          <Image
            source={ad2}
            style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Add3box}>
          <Image
            source={ad3}
            style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Add4box}>
          <Image
            source={ad4}
            style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
          />
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  toptext: {
    fontSize: 28,
    fontWeight: '600',
    paddingTop: 80,
    lineHeight: 40,
  },
  makecard: {
    padding: 25,
    paddingTop: 30,
    paddingBottom: 30,
    marginBottom: 5,
    marginTop: 5,
    borderBottomColor: 'black',
    width: diviceWidth,
    height: 280,
    alignSelf: 'center',
  },
  starLeftReward: {
    fontSize: 14,
    fontWeight: '600',
    color: '#B99C5C',
  },
  starLeftText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#B99C5C',
  },
  ProgressBar: {
    height: 8,
    borderRadius: 100,
    marginTop: 10,
  },
  lastheaderbutton: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 30,
    marginBottom: 40,
  },
  Addbox: {
    margin: 20,
    marginBottom: 5,
    marginTop: 5,
    borderBottomColor: 'black',
    height: 430,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  newMenu: {
    paddingLeft: 18,
  },
  menuContainer: {},
  Add2box: {
    margin: 20,
    marginBottom: 5,
    marginTop: 5,
    borderBottomColor: 'black',
    height: 300,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Add3box: {
    margin: 20,
    marginBottom: 5,
    marginTop: 5,
    borderBottomColor: 'black',
    height: 200,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Add4box: {
    margin: 20,
    marginBottom: 5,
    marginTop: 5,
    borderBottomColor: 'black',
    height: 450,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
