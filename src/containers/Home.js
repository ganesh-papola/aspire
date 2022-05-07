import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';
import { RootContainer } from '.';
import { strings } from '../constants';
import { Header } from '../components';

export default () => {
  return (
    <RootContainer containerStyle={styles.primaryContainer}>
        <View style={[styles.flex1, styles.homeContainer]}>
            <Text style={styles.textStyle}>Aspire</Text>
        </View>
      </RootContainer>
  );
}