import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../constants';
import { normalize } from '../utils';
const { width } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        height: width * 0.14,
        backgroundColor: colors.primary,
        paddingHorizontal: normalize(15),
    },
    icon: {
        height: normalize(25),
        width: normalize(25),
        marginBottom: normalize(2)
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.white,
        fontSize: normalize(24),
        lineHeight: normalize(32)
    },
    center: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 8
    },
    left: {
        flex:1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    right: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});