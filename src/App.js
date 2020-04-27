import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store";
import PinCodeScreen from './screens/PinCodeScreen';

export default App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <PinCodeScreen/>
            </PersistGate>
        </Provider>
    );
}