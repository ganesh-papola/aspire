import React from 'react';
import { View, Text, Image } from 'react-native';
import { strings } from '../constants';
import { paymentCardStyles } from '../styles';
import { Images } from '../assets';

export default ({name="", number="", validity="", cvv="", show=false }) => {
    const hiddenNumber = '●●●●  ●●●●  ●●●●'
    const hiddenCvv = "***";
    const numberArr = number.split(" ");
    const last4Digits = numberArr[3];
    return (
        <View style={paymentCardStyles.container}>
                <View style={paymentCardStyles.logoView}>
                    <View style={paymentCardStyles.emptyLogoView}/>
                    <Image source={Images.whiteLogo} style={paymentCardStyles.logo}/>
                    <Text style={paymentCardStyles.logoText}>{strings.aspire}</Text>
                </View>
                <Text style={paymentCardStyles.nameText}>{name}</Text>
                { show ?
                <View style={paymentCardStyles.hiddenNumberView}>
                    {numberArr.map(item=><Text style={paymentCardStyles.maskedText}>{item}</Text>)}
                </View>
                 :
                <View style={paymentCardStyles.hiddenNumberView}>
                    { hiddenNumber.split(" ").map(item=><Text style={[paymentCardStyles.maskedText,paymentCardStyles.maskedHiddenText]} >{item}</Text>) }
                    <Text style={[paymentCardStyles.maskedText, paymentCardStyles.last4Digits]} >{ last4Digits }</Text>
                </View>
                }
                <View style={paymentCardStyles.validityView}>
                    <Text style={paymentCardStyles.validityText}>{`${strings.debitCard.thru} ${validity}`}</Text>
                    <Text style={[paymentCardStyles.validityText, paymentCardStyles.cvvText]}>{`${strings.debitCard.cvv} ${cvv}`}</Text>
                </View>
                <Image source={Images.visa} style={paymentCardStyles.visaIcon}/>
                
        </View>
    );
}