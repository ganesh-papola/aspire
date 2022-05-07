import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { strings } from '../constants';
import { styles, weeklyLimitStyles } from '../styles';
import { RootContainer } from './';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';
import { Images } from '../assets';
import { useDispatch } from 'react-redux';
import { setWeeklyLimit } from '../redux/actions';

export default () => {
  const navigation = useNavigation();
  const [limit, setLimit] = useState("");
  const dispatch = useDispatch();
  const onBack = () => {
    navigation.goBack();
  }
  const onChangeText = t => {
    setLimit(t)
  }
  const dollarData = [
    { text: "S$ 5,000", value: "5000" },
    { text: "S$ 10,000", value: "10000" },
    { text: "S$ 20,000", value: "20000" }
  ]
  const onSave = () => {
    if(+limit){
      dispatch(setWeeklyLimit({ isLimit: true, limit }));
      onBack();
    }
  }
  const onSetInput = (item) => {
    setLimit(item.value)
  }
  return (
    <RootContainer containerStyle={styles.flex1}>
      <View style={styles.primaryContainer}>
        <Header right onBack={onBack} />
        <Text style={weeklyLimitStyles.headerText}>{strings.spendingLimit.title}</Text>
        <View style={weeklyLimitStyles.roundContainer}>
          <View style={weeklyLimitStyles.secondryHeading}>
            <Image resizeMode="contain" source={Images.meter} style={weeklyLimitStyles.meterIcon} />
            <Text style={weeklyLimitStyles.secondryTitleText}>{strings.spendingLimit.secondryTitle}</Text>
          </View>
          <View style={weeklyLimitStyles.textInputView}>
            <View style={weeklyLimitStyles.balanceSDView}>
              <Text style={weeklyLimitStyles.dollarText}>{strings.debitCard.sDollar}</Text>
            </View>
            <TextInput onChangeText={onChangeText} value={limit} style={weeklyLimitStyles.textInput} maxLength={5} keyboardType="numeric" />
          </View>
          <Text style={weeklyLimitStyles.inputDescriptionText}>{strings.spendingLimit.inputDescription}</Text>
          <View style={weeklyLimitStyles.dollarInputBoxs}>
            {dollarData.map(item => (<TouchableOpacity activeOpacity={1} onPress={() => onSetInput(item)} style={weeklyLimitStyles.dollarInputBox}>
              <Text style={weeklyLimitStyles.dollarBoxText}>{item.text}</Text>
            </TouchableOpacity>))}
          </View>
          <View style={styles.flex1} />
          <View style={weeklyLimitStyles.buttonView}>
            <TouchableOpacity activeOpacity={1} onPress={onSave} style={[weeklyLimitStyles.button, +limit ? weeklyLimitStyles.buttonActive : weeklyLimitStyles.buttonDeactive]}>
              <Text style={weeklyLimitStyles.buttonText}>{strings.save}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </RootContainer>
  );
}
