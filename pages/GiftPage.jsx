import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function GiftPage() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Gift</Text>
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
