import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Col, Grid } from 'react-native-easy-grid';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function OtherItemCard({ subHeader, subDesc }) {
  return (
    <TouchableOpacity>
      <Grid style={styles.header}>
        <Col size={5}>
          <Text style={styles.subHeaderText}>{subHeader}</Text>
        </Col>
        <Col size={3}>
          <Text style={styles.subDescText}>{subDesc}</Text>
        </Col>
        <Col size={1}>
          <Ionicons name={'chevron-forward'} color={'grey'} size={25} />
        </Col>
      </Grid>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 10,
    marginVertical: 6,
    padding: 10,
  },
  subHeaderText: {
    marginLeft: 3,
    fontSize: 16,
    paddingTop: 6,
  },
  subDescText: {
    marginLeft: 3,
    paddingRight: 13,
    fontSize: 14,
    fontWeight: '700',
    color: 'grey',
    paddingTop: 6,
    textAlign: 'right',
  },
});
