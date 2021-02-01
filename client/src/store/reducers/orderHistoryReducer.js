import { orderHistoryConstants } from '../../constants';

function orderHistory(state = {orders: []}, action) {
    switch (action.type) {
        case orderHistoryConstants.ADD_TO_ORDERS:
            return {
                ...state,
                orders: [...state.orders, action.order],
                user: action.user
            }
        default:
            return state;
    }
}

export default orderHistory;