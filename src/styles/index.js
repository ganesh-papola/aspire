import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../constants';

export const styles = StyleSheet.create({
    flex1: { flex: 1},
    primaryContainer: {
        flex:1,
        backgroundColor: colors.primary
    },
    homeContainer: {
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: colors.primary,
        fontSize: 20
    }
})
export { default as appStyles } from "./app";
export { default as loaderStyle } from "./loader";
export { default as headerStyle } from "./header";
export { default as customTabsStyles } from "./customTabs";
export { default as debitCardStyles } from "./debitCard";
export { default as paymentCardStyles } from "./paymentCard";
export { default as debitListItemsStyles } from "./debitListItems";
export { default as toggleButtonStyles } from "./toggleButton";
export { default as weeklyLimitStyles } from "./weeklyLimit";
export { default as progressBarStyles } from "./progressBar";