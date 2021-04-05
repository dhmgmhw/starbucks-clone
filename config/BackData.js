import {
    Alert
} from "react-native";
import axios from 'axios';

const host = 'http://3.36.65.84'

export async function getData() {
    try {
        // const result = await axios({
        //     method: 'get',
        //     url: host + '/menu',
        // });

        const result = await axios.get(host + '/menu');

        console.log(result)
        console.log(result.data)
        console.log(result.data.result)
        console.log(result.data.result[1].name)

        return result.data.result

    } catch (err) {
        Alert.alert('잘못된 정보 :(');
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