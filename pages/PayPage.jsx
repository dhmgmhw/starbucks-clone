import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function PayPage() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Pay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
