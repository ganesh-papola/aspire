import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './AppNavigator';
import { useDispatch } from 'react-redux';
import NetInfo from "@react-native-community/netinfo";
import { updateInternetStatus } from '../redux/actions';
import { Stacks } from "./";

export default () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(({ isConnected }) => {
      dispatch(updateInternetStatus(isConnected))
    });
    return unsubscribe
  }, [])
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
};