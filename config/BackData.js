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
export async function getCateDetailData(id) {
    try {
        // console.log(id)
        // const result = await axios.get(host + '/menu/drink/categories/606c13eadbd54522e7c47544');
        // const result = await axios.get(host + '/menu/drink/categories/' + id);

        const response = await axios({
            method: 'get',
            url: host + '/menu/drink/categories/' + id,
        });

        // console.log(response.data.result)
        return response.data.result
    } catch (err) {
        Alert.alert(err);
    }
}

//오더페이지>카테코리>세부카테고리>각 메뉴별 정보 - 형인
export async function getMenuDetailData(id) {
    try {
        // console.log(id)
        // const result = await axios.get(host + '/menu/drink/categories/606c13eadbd54522e7c47544');
        // const result = await axios.get(host + '/menu/drink/categories/' + id);

        const response = await axios({
            method: 'get',
            url: host + '/menu/drink/' + id,
          });

        // console.log(response.data.result)
        return response.data.result
    } catch (err) {
        Alert.alert(err);
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
        Alert.alert('아이디를 확인해주세요 :)');
    }
}

export async function login(id, password, navigation) {
    try {
        const response = await axios({
            method: 'post',
            url: host + '/user/login',
            data: {
                "id": id,
                "password": password
            },
        });

        const token = response.data.result.user.token;
        await AsyncStorage.setItem('session', token);

        Alert.alert('로그인 성공!');
        navigation.push('TabNavigator');
    } catch (err) {
        Alert.alert('로그인에 문제가 있는 것 같아요 :(');
    }
}

// 유저인포-형원님
export async function getUserInfo() {
    try {
        const token = await AsyncStorage.getItem('session');
        const response = await axios({
            method: 'get',
            url: host + '/user/user_info',
            headers: {
                authorization: 'Bearer ' + token,
            },
        });
        console.log(response.data.result)
        return response.data.result
    } catch (err) {
        Alert.alert("당신이 누군지 모르겠어요 :(");
    }
}

export async function logout(navigation) {
    try {
        console.log('로그아웃을 시도합니다..');
        console.log(AsyncStorage)
        AsyncStorage.clear()
        Alert.alert('로그인페이지로 돌아갑니다.');
        navigation.push('LoginPage');
    } catch (err) {
        Alert.alert('너는 벗어날 수 없어');
    }
}
