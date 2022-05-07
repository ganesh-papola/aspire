import React from 'react';
import { View, Text, Image } from 'react-native';
import { strings } from '../constants';
import { debitListItemsStyles, styles } from '../styles';
import { Images } from '../assets';
import ToggleButton from './toggleButton';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { setWeeklyLimit } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default () => {
    
    const arr = [
        { id: 0, title: strings.debitCard.topupAccount, description: strings.debitCard.topupDescription, image: Images.topup, toggleService: false},
        { id: 1, title: strings.debitCard.weeklySpendingLimit, description: strings.debitCard.weeklySpendingDescription, image: Images.weeklySpending, toggleService: true, toggle: false},
        { id: 2, title: strings.debitCard.freezeCard, description: strings.debitCard.freezCardDescription, image: Images.frozenCard, toggleService: true, toggle: false},
        { id: 3, title: strings.debitCard.getNewCard, description: strings.debitCard.getNewCardDescription, image: Images.newCard, toggleService: false},
        { id: 4, title: strings.debitCard.deactivatedCards, description: strings.debitCard.deactivatedCardsDescription, image: Images.disabledCard, toggleService: false},
    ];
    const navigation = useNavigation();
    const dispatch  = useDispatch();
    const [lists, setList] = useState(arr);
    const onChange = (id) => {
            let arr = [...lists]
          const updatedData = arr.map(x => (x.id === id ? { ...x, toggle: !x.toggle } : x));
          setList(updatedData);
            if(id===1){
                const value = arr.find(x => x.id === id)["toggle"];
                if(!value) navigation.navigate(strings.weeklyLimit);
                else dispatch(setWeeklyLimit({ isLimit: false, limit: '' }));
            }
    }
    return (
             lists.map((item, i)=> (
                <View style={debitListItemsStyles.listView}>
                    <Image source={item.image} style={debitListItemsStyles.image} />
                    <View style={styles.flex1}>
                        <Text style={debitListItemsStyles.title}>{item.title}</Text>
                        <Text style={debitListItemsStyles.description}>{item.description}</Text>
                    </View>
                    {item.toggleService ? <ToggleButton onChange={()=>onChange(item.id)} value={item.toggle} /> : null}
                </View>
            ))
    )

}