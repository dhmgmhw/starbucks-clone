import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import OtherItemCard from '../components/OtherItemCard';

export default function OtherPage() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Other</Text>
      </View>
      <ScrollView style={styles.mainContainer}>
        <View>
          <Text style={styles.subHeader}>서비스</Text>
        </View>
        <OtherItemCard subHeader={'리워드'} icon={'star-outline'} />
        <View>
          <Text style={styles.subHeader}>고객 지원</Text>
        </View>
        <View>
          <Text style={styles.subHeader}>약관 및 정책</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
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
});
