import { orderHistoryConstants } from '../../constants/';

export const orderHistoryActions = {
    addToOrderHistory
}

function addToOrderHistory(order, user) {
    return dispatch => {
        dispatch(addOrder(order,user));
    }

    function addOrder() { return { type: orderHistoryConstants.ADD_TO_ORDERS, order, user } }
}