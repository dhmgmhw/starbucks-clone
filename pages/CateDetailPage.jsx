import React, { useState, useEffect } from 'react';
import { Container } from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Loading from './Loading';
import HeaderComponent from '../components/HeaderComponent';
import CateDetailComponent from '../components/CateDatailComponent';

import data from '../data.json';
import { getCateDetailData } from '../config/BackData';

export default function CateDetailPage({ navigation, route }) {
  const id = route.params;

  const [ready, setReady] = useState(false);
  const [categories, setCategories] = useState(data.result);

  useEffect(() => {
    setTimeout(() => {
      download();
      setReady(true);
    });
  }, []);

  const download = async () => {
    const result = await getCateDetailData(id);
    // console.log(result);
    setCategories(result);
  };

  return ready ? (
    <Container>
      {/* "콜드브루" 칸에 알맞는 name값 가져오기 - 어떻게?? */}
      <HeaderComponent headerTitle='콜드브루' style={styles.header} />
      <Ionicons
        style={styles.headerIcons1}
        name={'search-outline'}
        color={'grey'}
        size={25}
      />

      <ScrollView>
        {categories.map((category, i) => {
          return (
            <CateDetailComponent
              category={category}
              key={i}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </Container>
  ) : (
    <Loading />
  );
}
const styles = StyleSheet.create({
  headerIcons1: {
    position: 'absolute',
    top: 60,
    left: 360,
  },
});
