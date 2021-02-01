import { checkoutConstants } from '../../constants';

function checkout(state = {cart: []}, action) {
    switch(action.type) {
        case checkoutConstants.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.shoe]
            }
        default:
            return state;
    }
}

export default checkout;
