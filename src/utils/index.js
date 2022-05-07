import axios from "axios";
import { baseUrl } from "../constants";
import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window')
export const scaleWidth = width / 375
export const scaleHeight = height / 812
export const scale = Math.min(scaleWidth, scaleHeight)

export const normalize = size => {
    const newSize = Math.ceil(size * scale)
    return newSize
}

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 20000,
    headers: {
        "content-type": "application/json"
    }
});


export const request = (url) => instance.get(url);