import { StyleSheet, Dimensions } from 'react-native';
import { scaleText } from 'react-native-text';
import { colors } from '../constants';
import { normalize } from '../utils';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    headerText: {
        fontSize: normalize(24)
    },
    availableBalanceTitle: {
       fontSize: normalize(14),
       color: colors.white,
       marginTop: normalize(5),
       paddingHorizontal: normalize(20)
    },
    availableBalance: {
        fontSize: normalize(24),
        fontWeight: "bold",
        marginLeft: normalize(15)
    },
    balanceView: {
        flexDirection: "row",
        paddingVertical: normalize(15),
        paddingHorizontal: normalize(20),
        alignItems: 'center',
        paddingBottom: normalize(5)
    },
    balanceSDView: {
        padding: normalize(3),
        borderRadius: 4,
        backgroundColor: colors.green,
        paddingHorizontal: normalize(5),
        height: normalize(22),
        width: normalize(40),
        justifyContent: 'center',
        alignItems: 'center'
    },
    dollarText: {
        color: colors.white,
        fontSize: normalize(12),
        fontWeight: "bold"
    },
    roundContainerView: {
        flex: 1,
        borderTopRightRadius: normalize(24),
        borderTopLeftRadius: normalize(24),
        backgroundColor: colors.white,
        paddingBottom: normalize(60)
    },
    emptyView: {
        height: normalize(140)
    },
        cardView: {
        height: normalize(260),
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        top: -normalize(100),
        left: 0,
        right: 0,
        // marginTop: -normalize(130)
    },
    showHideContainer: {
        flexDirection: "row",
        paddingHorizontal: normalize(22),
        width: "100%"
    },
    showHideView:{
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: normalize(6),
        borderTopLeftRadius: normalize(6),
        paddingHorizontal: normalize(5),
        backgroundColor: colors.white,
        width: normalize(150),
    },
    showHideEmptyView: {
        flex:1
    },
    hideCardText: {
        color: colors.green,
        fontSize: normalize(12),
        paddingHorizontal: normalize(3),
        paddingVertical: normalize(10)
    },
    listItemContainer: {
        marginTop:normalize(10)
    },
    scrollView: {
         position: 'absolute', 
         top: normalize(80), 
         left: 0, 
         bottom: 0, 
         right: 0
    },
    progressBarExtraSpace: {
        height: normalize(150)
    }
    
});