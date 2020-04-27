export default (state = [] , action) => {
    switch (action.type) {
        case 'save_pinCode':
            return action.payload;
        case 'update_pinCode':
            return action.payload;
        default:
            return state;
    }
};