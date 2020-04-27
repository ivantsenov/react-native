export default (state = [], action) => {
    switch (action.type) {
        case 'correct':
            return action.payload;
        case 'wrong':
            return action.payload;
        case 'new_pinCode':
            return action.payload;
        case 'default':
            return action.payload;
        default:
            return state;
    }
}