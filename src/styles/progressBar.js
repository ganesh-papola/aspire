import { StyleSheet } from 'react-native';
import { colors } from '../constants';
import { normalize } from '../utils';

export default StyleSheet.create({
    wrapper: {
        marginTop: normalize(150),
        padding: normalize(20)
    },
    barContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    amountText: {
        fontSize: normalize(13),
        color: colors.green,
        fontWeight: "300"
    },
    limitText: {
        fontSize: normalize(13),
        color: colors.darkgrey3,
        fontWeight: "300"
    },
    barView: {
        overflow: 'hidden',
        flex: 1,
        height: normalize(15),
        backgroundColor: colors.lightGreen,
        marginTop: normalize(10),
        borderRadius: normalize(10)
    },
    bar: {
        height: normalize(15),
        backgroundColor: colors.green,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: normalize(10),
        borderTopWidth: normalize(15),
        borderRightColor: 'transparent',
        borderTopColor: colors.green,
        overflow: 'hidden'
    },
    spendingLimitText: {
        fontSize: normalize(13)
    }
});