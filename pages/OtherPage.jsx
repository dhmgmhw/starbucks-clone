import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function OtherPage() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Other</Text>
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
