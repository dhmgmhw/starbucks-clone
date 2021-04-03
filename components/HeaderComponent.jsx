import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function PayPage({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  headerText: {
    paddingTop: 60,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
