import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { colors } from '../constants';
import { headerStyle } from '../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Images } from '../assets';

export default ({onBack, title, textStyle, right }) => {
    return (
        <View style={headerStyle.container}>
            {onBack ? 
                <View style={headerStyle.left}>
                    <TouchableHighlight underlayColor='transparent' onPress={onBack}>
                        <MaterialIcons name="arrow-back-ios" color={colors.white} size={20} />
                    </TouchableHighlight>
                </View> : null}
             <View style={headerStyle.center}>
                {title ? <Text numberOfLines={1} style={[headerStyle.title, textStyle]}>{title}</Text> : null}
            </View>
            <View style={headerStyle.right}>
                { right ?<Image source={Images.primaryLogo} style={headerStyle.icon}></Image>: null }
            </View>
        </View>
    );
}