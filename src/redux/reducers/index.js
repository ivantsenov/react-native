import { combineReducers } from 'redux';
import  PinReducer  from './PinReducer'
import  MessageReducer  from './MessageReducer'

export default combineReducers({
    pinCode: PinReducer,
    message: MessageReducer
});