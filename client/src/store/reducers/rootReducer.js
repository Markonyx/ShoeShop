import alertReducer from './alertReducer';
import checkoutReducer from './checkoutReducer';
import orderHistoryReducer from './orderHistoryReducer';
import productReducer from './productReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    alert: alertReducer,
    checkout: checkoutReducer,
    orderHistory: orderHistoryReducer,
    products: productReducer
});

export default rootReducer;