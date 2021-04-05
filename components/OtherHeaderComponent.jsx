import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function OtherHeaderComponent({ headerTitle }) {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>{headerTitle}</Text>
      </View>
      <View style={styles.shadowMaker}></View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 95,
    paddingBottom: 5,
    paddingLeft: 20,
    backgroundColor: 'white',
    shadowColor: 'lightgrey',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  headerText: {
    fontWeight: '600',
    fontSize: 30,
  },
  shadowMaker: {
    height: 5,
  },
});
