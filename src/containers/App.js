import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { View } from 'react-native';
import { Navigation } from '../navigation';
import { styles } from '../styles';
import { persistor, store } from '../redux';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.flex1}>
            <Navigation />
        </View>
      </PersistGate>
    </Provider>
  );
}
