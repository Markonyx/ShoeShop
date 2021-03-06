import { productConstants } from '../../constants';

function products(state = {}, action) {
    switch (action.type) {
        case productConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case productConstants.GETALL_SUCCESS:
            return {
                items: action.products
            }
        case productConstants.GETALL_FAILURE:
            return {
                error: action.error
            }
        default:
            return state;
    }
}

export default products;