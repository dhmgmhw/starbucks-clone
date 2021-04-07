import {
    Alert, AsyncStorage
} from "react-native";
import axios from 'axios';

const host = 'http://13.124.166.248'

// 오더페이지-형원님
export async function getCateData() {
    try {
        const result = await axios.get(host + '/menu/drink');
        return result.data.result
    } catch (err) {
        Alert.alert('카테고리를 불러올 수 없습니다 :(');
    }
}
//오더페이지>카테코리>세부카테고리 - 형인
export async function getCateDetailData() {
    try {
        const result = await axios.get(host + '/menu/drink/categories/606c13eadbd54522e7c47544');
        return result.data.result
    } catch (err) {
        Alert.alert('카테고리를 불러올 수 없습니다 :(');
    }
}

// 홈페이지-형인
export async function getNewMenuData() {
    try {

        const result = await axios.get(host + '/menu/new_menu');

        return result.data.result

    } catch (err) {
        Alert.alert('잘못된 정보 :(');
    }
}

export async function register(id, password, nickName) {
    try {
        console.log(id, password, nickName);
        await axios.post(host + '/user/register', {
            "nickName": nickName,
            "id": id,
            "password": password
        });
        Alert.alert('환영합니다, ' + nickName + ' :)');
    } catch (err) {
        console.log(err);
        Alert.alert('아이디를 확인해주세요');
    }
}

export async function login(id, password, navigation) {
    await axios.post(host + '/user/login', {
        "id": id,
        "password": password
    })
        .then((response) => {
            console.log(response.data.result);
            navigation.push('TabNavigator');
        }, (error) => {
            console.log(error);
            Alert.alert('아이디를 확인해주세요');
        });
}

export async function logout(navigation) {
    try {
        console.log('로그아웃을 시도합니다..');
        console.log(AsyncStorage)
        AsyncStorage.clear()
        navigation.push('LoginPage');
    } catch (err) {
        Alert.alert('너는 벗어날 수 없어 ', err.message);
    }
}