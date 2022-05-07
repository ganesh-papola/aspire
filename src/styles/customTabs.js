import { StyleSheet } from 'react-native';
import { colors } from '../constants';
import { normalize } from '../utils';


export default StyleSheet.create({
    barContainer: {
        bottom: 0,
        elevation: 5,
        left: 0,
        position: 'absolute',
        right: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        backgroundColor: 'white'
    },
    backImage: {
        backgroundColor: 'transparent',
        height: normalize(54),
        justifyContent: 'center',
        width: '100%',
    },
    container: {
        flexDirection: 'row'
    },
    tabContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingVertical: normalize(5),
    },
    createContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingVertical: normalize(5),
    },
    create: {
        position: 'absolute',
        top: -normalize(27)
    },
    activeTitle: {
        color: colors.green,
        marginTop: normalize(2),
        fontSize: normalize(10),
        fontWeight: '500'
    },
    deactiveTitle: {
        color: colors.grey,
        marginTop: normalize(2),
        fontSize: normalize(10),
        fontWeight: '500'
    },
    bottomArea: { 
        width: '100%', 
        backgroundColor: colors.white
    },
    mainImage: { 
        width: normalize(24), 
        height: normalize(25) }
});