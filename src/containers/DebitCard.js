import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header, PaymentCard, DebitListItems, ProgressBar, Loader } from '../components';
import { colors, strings } from '../constants';
import { debitCardStyles, styles } from '../styles';
import { RootContainer } from './';
import Octicons from 'react-native-vector-icons/Octicons';
import { useSelector, useDispatch } from 'react-redux';
import { getInternetStatus, getLoaderStatus, getWeeklyLimit } from '../redux/selectors';
import { getMyCardDetails } from '../redux/actions';
import { width } from '../utils';

export default () => {
  const [toggleCard, toggleCardNumber] = useState(false);
  const [cardDetails, setMyCardData] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector(s => s);
  const limit = getWeeklyLimit(state);
  const internet = getInternetStatus(state);
  const loader = getLoaderStatus(state);
  const onSuccess = data => setMyCardData(data);
  const onFail = () => { };
  useEffect(() => {
    dispatch(getMyCardDetails({ internet, onSuccess, onFail }));
  }, []);
  const cardProps = cardDetails ? { name: cardDetails.name, number: cardDetails?.card?.number, validity: cardDetails?.card?.expiry, cvv: cardDetails?.card?.cvv, show: toggleCard } : {}
  const progressBarValue = (+cardDetails?.card?.amount / +limit.limit) * width;

  return (
    <RootContainer containerStyle={styles.primaryContainer}>
      {loader && <Loader />}
      <View style={debitCardStyles.container}>
        <Header title={strings.tabs.debitCard} right textStyle={debitCardStyles.headerText} />
        <Text style={debitCardStyles.availableBalanceTitle}>{strings.debitCard.availableBalance}</Text>
        <View style={debitCardStyles.balanceView}>
          <View style={debitCardStyles.balanceSDView}>
            <Text style={debitCardStyles.dollarText}>{strings.debitCard.sDollar}</Text>
          </View>
          <Text style={[debitCardStyles.dollarText, debitCardStyles.availableBalance]}>{cardDetails?.balance}</Text>
        </View>
        <ScrollView style={debitCardStyles.scrollView} showsVerticalScrollIndicator={false} bounces={false}>
          <View style={debitCardStyles.emptyView} />
          <View style={debitCardStyles.roundContainerView}>
            <View style={debitCardStyles.cardView}>
              <View style={debitCardStyles.showHideContainer}>
                <View style={debitCardStyles.showHideEmptyView} />
                <TouchableOpacity style={debitCardStyles.showHideView} onPress={() => toggleCardNumber(!toggleCard)} activeOpacity={1}>
                  <Octicons name={toggleCard ? 'eye-closed' : 'eye'} size={15} color={colors.green} />
                  <Text style={debitCardStyles.hideCardText}>{toggleCard ? strings.debitCard.hideCardNumber : strings.debitCard.showCardNumber}</Text>
                </TouchableOpacity>
              </View>
              <PaymentCard show={toggleCard} {...cardProps} />
            </View>
            {limit.isLimit && !loader ? <ProgressBar data={limit} amount={cardDetails?.card?.amount} value={progressBarValue ? progressBarValue : 0} /> : <View style={debitCardStyles.progressBarExtraSpace} />}
            <View style={debitCardStyles.listItemContainer}>
              <DebitListItems />
            </View>
          </View>
        </ScrollView>
      </View>
      {/* </View> */}

    </RootContainer>
  );
}
