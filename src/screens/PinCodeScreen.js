import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import PinCodeMessage from '../components/PinCodeMessage';

const PinCodeScreen = (props) => {

    const [momentCode, setPinCode] = useState('');
    const [title, setTitle] = useState('Enter pin code');

    const handleSaveCode = (code) => {

        if (!props.pin){
            props.savePinCode(code);
            props.saveNewPinCodeMessage();

            setTitle('Enter pin code')
            setPinCode('');

            return true;
        }

        if (code === props.pin)
            props.saveCorrectMessage();
        else
            props.saveWrongMessage();

        setPinCode('');
    }

    const handleChangePinCode = () => {
        setPinCode('');
        setTitle('Enter your new pin code');

        props.saveDefaultMessage();
        props.savePinCode('');
    }

    return (
        <View style={styles.container}>
            <PinCodeMessage message={props.msg}/>
            <Text style={styles.pinTitle}>{title}</Text>
            <SmoothPinCodeInput
                codeLength={4}
                placeholder={placeholder}
                mask={mask}
                password={true}
                autoFocus={true}
                cellStyle={null}
                cellStyleFocused={null}
                value={momentCode}
                onFulfill={code => handleSaveCode(code)}
                onTextChange={code => setPinCode(code)}
            />
            <Button title='Change pin code' onPress={handleChangePinCode}/>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pinTitle: {
        fontFamily: 'System',
        fontSize: 32,
        fontWeight: '700',
        color: '#000',
    },
}

const placeholder = <View style={{
    width: 10,
    height: 10,
    borderRadius: 25,
    opacity: 0.3,
    backgroundColor: 'black',
}}></View>

const mask = <View style={{
    width: 10,
    height: 10,
    borderRadius: 25,
    backgroundColor: 'black',
}}></View>


const mapStateToProps = state => {
    return {
        pin: state.pinCode,
        msg: state.message
    }
}

export default connect(mapStateToProps, actions)(PinCodeScreen);