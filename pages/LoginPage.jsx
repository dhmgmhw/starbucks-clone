import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Alert,
  AsyncStorage,
  Image,
  Dimensions,
} from 'react-native';
import { Container, Content, Text, Form, Button, Footer } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { login } from '../config/BackData';
import ItemInput from '../components/ItemInput';
import HeaderComponent from '../components/HeaderComponent';
import { ScrollView } from 'react-native-gesture-handler';

const diviceWidth = Dimensions.get('window').width;

export default function LoginPage({ navigation }) {
  const [ready, setReady] = useState(false);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const [idError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });

    setTimeout(() => {
      AsyncStorage.getItem('session', (err, result) => {
        console.log('ASYNCSTORAGE');
        console.log(result);
        if (result) {
          navigation.push('TabNavigator');
        } else {
          setReady(true);
        }
      });
      setReady(true);
    }, 1000);
  }, []);

  const doLogin = () => {
    //   나중에 Alert 대신 모달창으로 디자인해보자
    if (id == '') {
      setIdError('');
      Alert.alert('아이디를 입력해주세요');
      return false;
    } else {
      setIdError('');
    }
    if (password == '') {
      setPasswordError('');
      Alert.alert('비밀번호를 입력해주세요');
      return false;
    } else {
      setPasswordError('');
    }
    login(id, password, navigation);
  };

  const setIdFunc = (itemInputId) => {
    setId(itemInputId);
  };
  const setPasswordFunc = (itemInputPassword) => {
    setPassword(itemInputPassword);
  };

  const goSignUp = () => {
    navigation.navigate('SignUpPage');
  };

  return (
    <Container style={styles.container}>
      <StatusBar style='black' />
      <HeaderComponent headerTitle='로그인' />
      <ScrollView>
        <Content contentContainerStyle={styles.content} scrollEnabled={false}>
          <Image
            style={styles.logo}
            resizeMode='contain'
            source={require('../assets/logo.png')}
          />
          <Text style={styles.title}>안녕하세요.{'\n'}스타벅스입니다.</Text>
          <Text style={styles.subTitle}>
            {'\n'}회원 서비스 이용을 위해 로그인 해주세요.
          </Text>
          <Form style={styles.form}>
            <ItemInput
              title={'아이디'}
              type={'아이디'}
              setFunc={setIdFunc}
              error={idError}
            />
            <ItemInput
              title={'비밀번호'}
              type={'password'}
              setFunc={setPasswordFunc}
              error={passwordError}
            />
          </Form>
          <Button full style={styles.signInBtn} onPress={goSignUp}>
            <Text style={styles.signInBtnText}>회원가입</Text>
          </Button>
        </Content>
      </ScrollView>
      <Footer style={styles.footer}>
        <Button full style={styles.loginBtn} onPress={doLogin}>
          <Text>로그인하기</Text>
        </Button>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 100,
    height: 100,
    marginBottom: 30,
    alignSelf: 'center',
    right: 120,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    bottom: 60,
  },
  title: {
    paddingLeft: 20,
    fontSize: 25,
    fontWeight: '700',
  },
  subTitle: {
    paddingLeft: 20,
  },
  form: {
    width: diviceWidth * 0.9,
    borderRadius: 10,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
  },
  loginBtn: {
    alignSelf: 'center',
    width: diviceWidth * 0.9,
    marginBottom: 30,
    borderRadius: 100,
    backgroundColor: '#3AB27B',
  },
  signInBtn: {
    alignSelf: 'center',
    width: 120,
    marginTop: 5,
    backgroundColor: 'white',
  },
  signInBtnText: {
    color: 'black',
    fontSize: 14,
  },
  footer: {
    borderTopWidth: 0,
    backgroundColor: 'white',
  },
});
