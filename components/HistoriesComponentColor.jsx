import { View } from 'native-base';
import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';

const diviceWidth = Dimensions.get('window').width;

export default function HistoryComponentColor({ history }) {
  console.log(history.menu.name);
  return (
    <TouchableOpacity style={{ backgroundColor: '#ebf4eb' }}>
      <Grid style={styles.cate}>
        <Col size={1}>
          <Image
            style={styles.cardImage}
            resizeMode='cover'
            source={{ uri: history.menu.image }}
          />
          <View style={styles.imageCover}></View>
          <View style={styles.badge}>
            <Text style={styles.count}>{history.num}</Text>
          </View>
          <Text style={styles.orderProgress}>주문완료</Text>
        </Col>
        <Col size={3} style={styles.cardText}>
          <Text style={styles.cardTitle}>{history.menu.name}</Text>
          <Text style={styles.cardDate}>{history.date.substring(0, 10)}</Text>
        </Col>
      </Grid>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cate: {
    height: 80,
    width: 80,
    width: diviceWidth * 0.9,
    alignSelf: 'center',
    marginVertical: 15,
    flex: 1,
    alignItems: 'center',
  },
  cardImage: {
    height: 70,
    width: 70,
    borderRadius: 100,
  },
  imageCover: {
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0.4,
  },
  orderProgress: {
    height: 70,
    width: 70,
    position: 'absolute',
    textAlign: 'center',
    paddingTop: 27,
    fontSize: 13,
    fontWeight: '700',
    color: 'white',
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 5,
  },
  cardDate: {
    fontSize: 12,
  },
  badge: {
    height: 23,
    width: 23,
    backgroundColor: '#617b30',
    borderRadius: 100,
    position: 'absolute',
    left: 50,
    top: 2,
  },
  count: {
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    top: 4,
    color: 'white',
  },
});
