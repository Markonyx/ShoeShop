import { productConstants } from '../../constants';
import { productService } from '../../services';
import { alertActions } from './';

export const productActions = {
    getAll
}

function getAll() {
    return dispatch => {
        dispatch(request());

        productService.getAll()
            .then(
                products => dispatch(success(products)),
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error))
                }
            );
    }


    function request() { return { type: productConstants.GETALL_REQUEST } }
    function success(products) { return { type: productConstants.GETALL_SUCCESS, products } }
    function failure(error) { return { type: productConstants.GETALL_FAILURE, error } }
}