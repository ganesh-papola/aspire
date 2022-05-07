import React from 'react';
import { Switch, } from 'react-native';
import { colors } from '../constants';
import { toggleButtonStyles } from '../styles';

export default ({ onChange=()=>{}, value=false }) => {
    return (
        <Switch
            style={toggleButtonStyles.toggle}
            trackColor={{ false: colors.lightGrey, true: colors.green }}
            thumbColor={colors.white}
            ios_backgroundColor={value ? colors.green : colors.lightGreen}
            onValueChange={onChange}
            value={value}
        />
    );
}


