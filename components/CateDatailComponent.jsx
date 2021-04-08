import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  LogBox,
} from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';

const diviceWidth = Dimensions.get('window').width;

export default function CateDetailComponent({ navigation, category }) {
  LogBox.ignoreLogs(['Warning: ...']);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailPage', category.name);
      }}>
      <Grid style={styles.cate}>
        <Col size={1}>
          <Image
            style={styles.cardImage}
            resizeMode='cover'
            source={{ uri: category.image }}
          />
        </Col>
        <Col size={2} style={styles.cardText}>
          <Text style={styles.cardTitle}>{category.name}</Text>
          <Text style={styles.cardEnTitle}>{category.eng_name}</Text>
          {/* price에 , 추가하기 ex)6100 => 6,100 */}
          <Text style={styles.cardPrice}>{category.price}원</Text>
        </Col>
      </Grid>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cate: {
    height: 100,
    width: 100,
    width: diviceWidth * 0.9,
    alignSelf: 'center',
    marginVertical: 15,
    flex: 1,
    alignItems: 'center',
  },
  cardImage: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: '500',
    marginBottom: 5,
  },
  cardEnTitle: {
    fontSize: 13,
    color: 'lightgrey',
    fontWeight: '500',
  },
  cardPrice: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
