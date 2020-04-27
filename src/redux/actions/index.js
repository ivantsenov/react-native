export const savePinCode = (code) => {
    return {
        type: 'save_pinCode',
        payload: code
    };
};

export const saveCorrectMessage = () => {
    return {
        type: 'correct',
        payload: 'Correct code!'
    }
}

export const saveWrongMessage = () => {
    return {
        type: 'wrong',
        payload: 'Wrong code!'
    }
}

export const saveDefaultMessage = () => {
    return {
        type: 'default',
        payload: ''
    }
}

export const saveNewPinCodeMessage = () => {
    return {
        type: 'new_pinCode',
        payload: 'Pin code was changed.'
    }
}


