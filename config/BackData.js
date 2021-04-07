import {
    Alert, AsyncStorage
} from "react-native";
import axios from 'axios';

const host = 'http://13.124.166.248'

export async function getCateData() {
    try {
        const result = await axios.get(host + '/menu/drink');
        return result.data.result
    } catch (err) {
        Alert.alert('카테고리를 불러올 수 없습니다 :(');
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
        const error = err.response.data
        Alert.alert(error);
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




// export async function getDrinks(name) {
//   try {
//       const result = await axios({
//           method: 'get',
//           url: host + '/menu',
//           params: {
//             name: name
//           }
//       });

//       const result = await axios.get(host + '/menu/' + name);

//       if (result.data.success) {
//         return result.data.result
//       } else {
//         Alert.alert('잘못된 정보 :(');
//       }
//   } catch (err) {
//       Alert.alert('잘못된 정보 :(');
//   }
// }