import React, { useState } from 'react';
import { StyleSheet, Dimensions, Image, Alert } from 'react-native';
import { Container, Content, Text, Form, Button } from 'native-base';
import ItemInput from '../components/ItemInput';

const diviceWidth = Dimensions.get('window').width;

export default function SignUpPage() {
  const [id, setId] = useState('');
  const [idError, setIdError] = useState('');

  const [nickName, setNickName] = useState('');
  const [nickNameError, setNickNameError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');

  const doSignUp = () => {
    if (id == '') {
      Alert.alert('아이디를 입력해주세요');
      return false;
    } else {
      setIdError('');
    }

    if (password == '') {
      Alert.alert('비밀번호를 입력해주세요');
      return false;
    } else {
      setPasswordError('');
    }

    if (passwordConfirm == '') {
      Alert.alert('비밀번호를 한번 더 입력해주세요');
      return false;
    } else {
      setPasswordConfirmError('');
    }

    if (password !== passwordConfirm) {
      Alert.alert('비밀번호가 서로 일치하지 않습니다');
      return false;
    } else {
      setPasswordConfirmError('');
    }

    if (nickName == '') {
      Alert.alert('닉네임을 확인해주세요');
      return false;
    } else {
      setNickNameError('');
    }
    registration(id, password, nickName);
  };

  return (
    <Container style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode='contain'
        source={require('../assets/logo.png')}
      />

      <Content contentContainerStyle={styles.content} scrollEnabled={false}>
        <Text style={styles.idTitle}>
          아이디와 비밀번호를{'\n'}입력해주세요.
        </Text>
        <Form style={styles.form}>
          <ItemInput
            title={'아이디 (4~13자리 이내)'}
            type={'id'}
            error={idError}
            setFunc={setId}
          />
          <ItemInput
            title={'비밀번호 (10~29자리 이내)'}
            type={'password'}
            error={passwordError}
            setFunc={setPassword}
          />
          <ItemInput
            title={'비밀번호 확인'}
            type={'password'}
            error={passwordConfirmError}
            setFunc={setPasswordConfirm}
          />
        </Form>
        <Text style={styles.emailTitle}>닉네임을{'\n'}입력해주세요.</Text>
        <Form style={styles.form}>
          <ItemInput
            title={'닉네임 (한글 최대 6자)'}
            type={'nickName'}
            error={nickNameError}
            setFunc={setNickName}
          />
        </Form>
        <Text style={styles.info}>
          {'\u2022'} 주문하신 제품/상품을 찾으실 때, 파트너가 등록하신 닉네임을
          불러 드립니다.
        </Text>
        <Text style={styles.info}>
          {'\u2022'} 부적절한 닉네임을 신청하는 경우, 신청이 제한되거나 관리자에
          의해 예고 없이 사용이 제한될 수 있습니다.
        </Text>
      </Content>
      <Button full style={styles.signUpBtn} onPress={doSignUp}>
        <Text>회원가입</Text>
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 50,
    height: 40,
    marginBottom: 20,
    alignSelf: 'center',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    bottom: 40,
  },
  idTitle: {
    paddingLeft: 20,
    fontSize: 25,
    fontWeight: '700',
  },
  emailTitle: {
    paddingLeft: 20,
    fontSize: 25,
    fontWeight: '700',
    marginTop: 30,
  },
  form: {
    width: diviceWidth * 0.9,
    borderRadius: 10,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  info: {
    paddingHorizontal: 30,
    fontSize: 14,
    color: 'grey',
    lineHeight: 25,
  },
  signUpBtn: {
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
