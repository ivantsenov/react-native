import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from '../reducers';
import AsyncStorage from '@react-native-community/async-storage';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['pinCode']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer)

let persistor = persistStore(store);

export {store, persistor};