/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
 import { colors } from '../constants';
 import { Loader } from "./";
 
 export default ({children, containerStyle={}}) => {
   const isDarkMode = useColorScheme() === 'dark';
   const backgroundStyle = {
     backgroundColor: colors.primary,
     flex:1
   };
 
   return (
     <SafeAreaView style={[backgroundStyle, containerStyle]}>
       <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} animated />
       {children}
    </SafeAreaView>
   );
 };

 