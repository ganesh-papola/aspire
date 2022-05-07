import { StyleSheet } from 'react-native';
import { colors } from '../constants';
import { normalize } from '../utils';

export default StyleSheet.create({
    container:{
        height: normalize(200),
        width: "90%",
        backgroundColor: colors.green,
        borderRadius: 15,
        marginTop: -normalize(5),
        padding: normalize(20)
    },
    logoView: {
        flexDirection: "row"
    },
    emptyLogoView: {
        flex:1
    },
    logo: {
        height: normalize(20),
        width: normalize(20)
    },
    logoText: {
        color: colors.white,
        fontSize: normalize(19),
        paddingLeft: normalize(2),
        marginTop: -normalize(2)
    },
    nameText: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: normalize(22),
        textAlign: "left",
        marginVertical: normalize(10),
        marginBottom: normalize(20)
    },
    maskedText: {
        color: colors.white,
        fontSize: normalize(14),
        marginLeft: normalize(3),
        marginRight: normalize(6),
        letterSpacing: normalize(3)
    },
    hiddenNumberView: {
        flexDirection: "row",
        alignItems: 'center',
    },
    maskedHiddenText: {
        fontSize: normalize(7)
    },
    validityView: {
        flexDirection: "row",
        marginTop:normalize(15),
        paddingLeft: normalize(3)
    },
    validityText: {
        fontSize: normalize(13),
        color: colors.white
    },
    cvvText: {
        marginLeft: normalize(20)
    },
    visaIcon: {
        height: normalize(20),
        width: normalize(59),
        alignSelf: "flex-end",
        marginTop: normalize(10)
    },
    last4Digits: {

    }
})