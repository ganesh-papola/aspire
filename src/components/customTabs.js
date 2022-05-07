import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Images } from '../assets';
import { strings } from '../constants';
import { customTabsStyles } from '../styles';

const tabsData = [
    { defaultIcon: Images.logo, key: 0, title: strings.tabs.home, selectedIcon: Images.activeLogo },
    { defaultIcon: Images.debitCard, key: 1, title: strings.tabs.debitCard, selectedIcon: Images.activeDebitCard },
    { defaultIcon: Images.payments, key: 2, title: strings.tabs.payments, selectedIcon: Images.activePayments },
    { defaultIcon: Images.credit, key: 3, title: strings.tabs.credit, selectedIcon: Images.activeCredit },
    { defaultIcon: Images.profile, key: 4, title: strings.tabs.profile, selectedIcon: Images.activeProfile }
]

export default ({ navigation, state }) => {
    let { bottom } = useSafeAreaInsets();
    return (
        <View style={customTabsStyles.barContainer}>
            <View style={customTabsStyles.container}>
                {tabsData.map((item, index) => {
                    let { title, key, defaultIcon, selectedIcon } = item;
                    let active = state.index == key;
                    return <TouchableOpacity activeOpacity={0.8} key={index} onPress={() => navigation.navigate(title)} style={customTabsStyles.tabContainer}>
                        <Image resizeMode={'contain'} source={active ? selectedIcon : defaultIcon} style={customTabsStyles.mainImage} />
                        <Text numberOfLines={1} style={active ? customTabsStyles.activeTitle : customTabsStyles.deactiveTitle}>{title}</Text>
                    </TouchableOpacity>
                })}
            </View>
            {bottom ? <View style={[customTabsStyles.bottomArea, { height: bottom }]} /> : null}
        </View>
    );
};

