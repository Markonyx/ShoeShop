import { checkoutConstants } from '../../constants';

export const checkoutActions = {
    addToCart
}

function addToCart(shoe) {
    return dispatch => {
        dispatch(addShoe(shoe));
    }

    function addShoe() { return { type: checkoutConstants.ADD_TO_CART, shoe } }
}

