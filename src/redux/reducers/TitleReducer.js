export default (state = {}, action) => {
    switch (action.type){
        case 'new_pinCode':
            return action.payload;

    }

}