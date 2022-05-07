import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../constants';
import { loaderStyle } from '../styles';

export default () => {
    return (
        <View style={loaderStyle.container}>
            <ActivityIndicator color={colors.primary} size='large' />
        </View>
    );
}