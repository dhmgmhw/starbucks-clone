import {
    Alert
} from "react-native";
import axios from 'axios';

export function getData() {

    axios
        .get('http://3.36.65.84/menu')
        .then((Response) => {
            let result = Response.data.result;
            let data = [];
            result.map((i) => {
                data.push(i);
            });
            console.log(data);
            return data;
        })
        .catch((Error) => {
            console.log(Error);
        });
}