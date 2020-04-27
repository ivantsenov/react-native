import React from 'react';
import {Text} from 'react-native';

const PinCodeMessage = (props) => {
    return (
        <Text style={messageStyle}>{props.message || ''}</Text>
    )
}

const messageStyle = {
    fontSize: 22,
    marginBottom: 30
}

export default PinCodeMessage;