import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Alert,
  AsyncStorage,
  Image,
  Dimensions,
} from 'react-native';
import { Container, Content, Text, Form, Button } from 'native-base';
import ItemInput from '../components/ItemInput';
import { StatusBar } from 'expo-status-bar';
import HeaderComponent from '../components/HeaderComponent';

const diviceWidth = Dimensions.get('window').width;

export default function LoginPage({ navigation }) {
  const [ready, setReady] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
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

  const doSignIn = () => {
    //   나중에 Alert 대신 모달창으로 디자인해보자
    if (email == '') {
      setEmailError('');
      Alert.alert('아이디를 입력해주세요');
      return false;
    } else {
      setEmailError('');
    }

    if (password == '') {
      setPasswordError('');
      Alert.alert('아이디를 입력해주세요');
      return false;
    } else {
      setPasswordError('');
    }

    signIn(email, password, navigation);
  };
  const setEmailFunc = (itemInputEmail) => {
    setEmail(itemInputEmail);
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
            setFunc={setEmailFunc}
            error={emailError}
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
      <Button full style={styles.loginBtn} onPress={doSignIn}>
        <Text>로그인하기</Text>
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
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
});
