import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const diviceWidth = Dimensions.get('window').width;

export default function NewMenu({ category }) {
  return (
    <TouchableOpacity>
      <Grid style={styles.cate}>
        <Row size={3}>
          <Image
            style={styles.cardImage}
            resizeMode='cover'
            source={{ uri: category.image }}
          />
        </Row>
        <Row size={1} style={styles.cardText}>
          <Text style={styles.cardTitle}>
            {category.i}
            {category.name}
          </Text>
        </Row>
      </Grid>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cate: {
    height: 180,
    width: 100,
    width: diviceWidth * 0.38,
    marginVertical: 15,
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  cardImage: {
    height: 130,
    width: 130,
    borderRadius: 100,
  },
  cardTitle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 5,
    // marginLeft: 10,
    // marginRight: 10,
  },
  cardEnTitle: {
    fontSize: 13,
    color: 'lightgrey',
    fontWeight: '500',
  },
});
