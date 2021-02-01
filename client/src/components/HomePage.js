import React from 'react';
import { connect } from 'react-redux';
import { checkoutActions, productActions } from '../store/actions';

import shoe1 from '../shoe1.jpg';
import ShoeListItem from './shoes/ShoeListItem';

class HomePage extends React.Component {

    state = {
        thumbnail: shoe1,
    }

    componentDidMount() {
        this.props.getAll();
    }

    onAddToCart = (shoe) => {
        this.props.addToCart(shoe);
    }

    render() {
        const { products } = this.props;
        return (
            <div className="row">
                {products.items &&
                    <div className="row">
                        {products.items.map((product, index) =>
                            <ShoeListItem key={product.id} name={product.name} price={product.price} icon={this.state.thumbnail} onAddToCart={this.onAddToCart} />
                        )}
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { products } = state;
    return {
        products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (shoe) => {
            dispatch(checkoutActions.addToCart(shoe));
        },
        getAll: () => {
            dispatch(productActions.getAll())
        }
    }
}

const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };