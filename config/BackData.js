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

// 홈페이지-형인
export async function getNewMenuData() {
    try {
        // const result = await axios({
        //     method: 'get',
        //     url: host + '/menu',
        // });

        const result = await axios.get(host + '/menu/new_menu');

        // console.log(result)
        // console.log(result.data)
        // console.log(result.data.result)
        // console.log(result.data.result[1].name)

        return result.data.result

    } catch (err) {
        Alert.alert('잘못된 정보 :(');
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