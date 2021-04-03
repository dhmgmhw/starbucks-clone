import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default function OtherItemCard({ icon, subHeader }) {
  return (
    <Grid style={styles.header}>
      <Col size={1}>
        <Ionicons name={icon} color={'grey'} size={25} />
      </Col>
      <Col size={7}>
        <Text style={styles.headerText}>{subHeader}</Text>
      </Col>
      <Col size={1}>
        <Ionicons name={'chevron-forward'} color={'grey'} size={25} />
      </Col>
    </Grid>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    marginLeft: 40,
    marginRight: 10,
  },
  headerText: {
    marginLeft: 3,
    fontSize: 16,
    paddingTop: 6,
  },
});
