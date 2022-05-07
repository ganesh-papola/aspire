import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootReducer from './reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whiteList: ["aspire"]
};
const persistedReducer = persistReducer(persistConfig, RootReducer);
export const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default persistStore(store);