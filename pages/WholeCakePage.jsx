import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import OtherHeaderComponent from '../components/OtherHeaderComponent';
import data from '../data.json';
import WholeCakeComponent from '../components/WholeCakeComponent';
let cake = data.cake;

export default function WholeCakePage() {
  return (
    <View style={styles.container}>
      <OtherHeaderComponent headerTitle='홀케이크 예약' />
      <Ionicons
        style={styles.headerIcons}
        name={'search-outline'}
        color={'grey'}
        size={20}
      />
      <ScrollView showsScrollIndicator={false} style={styles.mainContainer}>
        {categories.map((cake, i) => {
          return (
            <WholeCakeComponent cake={cake} key={i} navigation={navigation} />
          );
        })}
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
  mainContainer: {
    backgroundColor: 'white',
  },
});
