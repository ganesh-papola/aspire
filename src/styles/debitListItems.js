import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../constants';
import { normalize } from '../utils';

export default StyleSheet.create({
    listView:{
        paddingHorizontal: normalize(20),
        flexDirection: "row",
        paddingVertical: normalize(20)
    },
    image: {
        height: normalize(30),
        width: normalize(30),
        marginRight: normalize(5)
    },
    title: {
        fontSize: normalize(13),
        lineHeight: normalize(20),
        color: colors.darkBlue
    },
    description: {
        fontSize: normalize(12),
        lineHeight: normalize(12),
        color: colors.darkGrey,
        marginTop: normalize(4)
    }
})