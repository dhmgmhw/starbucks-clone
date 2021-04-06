import {
    Alert, AsyncStorage
} from "react-native";
import axios from 'axios';

const host = 'http://13.124.166.248'

export async function getCateData() {
    try {
        // const result = await axios({
        //     method: 'get',
        //     url: host + '/menu',
        // });

        const result = await axios.get(host + '/menu/drink');

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
    try {
        // await firebase.auth().signInWithEmailAndPassword(id, password);
        // await AsyncStorage.setItem('session', id);
        navigation.push('TabNavigator');
    } catch (err) {
        Alert.alert('로그인 정보를 확인해주세요');
    }
}


export async function register(id, password, nickName, navigation) {
    try {
        console.log(id, password, nickName);


        // Alert.alert('회원가입 성공!');
        // await AsyncStorage.setItem('session', email);
        // navigation.push('TabNavigator');
    } catch (err) {
        Alert.alert('무슨 문제가 있는 것 같아요! => ', err.message);
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