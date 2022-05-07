import React from 'react';
import { View, Text } from 'react-native';
import { colors, strings } from '../constants';
import { progressBarStyles } from '../styles';
import { normalize } from '../utils';

export default ({ data, value, amount}) => {
    const { limit, isLimit } = data;
return isLimit ?
    (<View style={progressBarStyles.wrapper}>
        <View style={progressBarStyles.barContainer}><Text style={progressBarStyles.spendingLimitText}>{strings.debitCard.cardSpendingLimit}</Text>
            <Text>
                <Text style={progressBarStyles.amountText}>{'$' + amount}</Text>
                <Text style={progressBarStyles.limitText}>{'  |  $' + limit}</Text>
            </Text>
        </View>
        <View style={progressBarStyles.barView}>
            <View style={[progressBarStyles.bar, {width: normalize(value)}]}/>
        </View>
    </View>) : null
}