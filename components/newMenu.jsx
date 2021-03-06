import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';

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
    width: diviceWidth * 0.4,
    marginVertical: 15,
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    paddingRight: 30,
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
    textAlign: 'center',
  },
  cardEnTitle: {
    fontSize: 13,
    color: 'lightgrey',
    fontWeight: '500',
  },
});
