import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Col, Grid } from 'react-native-easy-grid';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function OtherItemCard({ icon, subHeader }) {
  return (
    <TouchableOpacity>
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
  headerText: {
    marginLeft: 3,
    fontSize: 16,
    paddingTop: 6,
  },
});
