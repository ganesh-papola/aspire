import { StyleSheet } from 'react-native';
import { colors } from '../constants';
import { normalize } from '../utils';

export default StyleSheet.create({
    headerText: {
        fontSize: normalize(24),
        fontWeight: "bold",
        color: colors.white,
        padding: normalize(15),
        paddingBottom: normalize(35)
    },
    roundContainer:{
        flex: 1,
        borderTopLeftRadius: normalize(24),
        borderTopRightRadius: normalize(24),
        backgroundColor: colors.white,
        padding: normalize(20)
    },
    secondryHeading: {
        flexDirection: "row",
        
    },
    meterIcon: {
        height: normalize(20),
        width: normalize(20)
    },
    secondryTitleText: {
        fontSize: normalize(14),
        marginLeft: normalize(15)
    },
    textInputView: {
        flexDirection: "row",
        marginTop: normalize(20),
        borderBottomWidth: 1,
        borderBottomColor: colors.greyBorder,
        paddingVertical: normalize(5)
    },
    balanceSDView: {
        padding: normalize(3),
        borderRadius: 4,
        backgroundColor: colors.green,
        paddingHorizontal: normalize(5),
        height: normalize(25),
        width: normalize(40),
        justifyContent: 'center',
        alignItems: 'center'
    },
    dollarText: {
        color: colors.white,
        fontSize: normalize(12),
        fontWeight: "bold"
    },
    textInput: {
        width: "100%",
        fontSize: normalize(24),
        color: colors.darkGrey1,
        fontWeight: "bold",
        marginLeft: normalize(5)
    },
    inputDescriptionText: {
        fontSize: normalize(11),
        color: colors.darkgrey2,
        paddingVertical: normalize(10)
    },
    dollarInputBoxs: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: normalize(35)
    },
    dollarInputBox: {
        paddingVertical: normalize(15),
        paddingHorizontal: normalize(23),
        backgroundColor: colors.lightGreen,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: normalize(4)
    },
    dollarBoxText: {
        fontSize: normalize(12),
        color: colors.lightGreen1
    },
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        height: normalize(50),
        borderRadius: normalize(30)
    },
    buttonActive: {
        backgroundColor: colors.green
    },
    buttonDeactive: {
        backgroundColor: colors.lightGrey
    },
    buttonText: {
        fontSize: normalize(16),
        color:colors.white
    }

});