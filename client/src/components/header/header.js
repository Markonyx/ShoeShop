import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {

    render() {;
        const { checkout } = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to="/"><div className="navbar-brand">Shoe Shop</div></Link>
                    <Link to="/checkout"><div className="navbar-brand">Shopping Cart: {checkout.cart && checkout.cart.length}</div></Link>
                    <Link to="/orders"><div className="navbar-brand">Order History</div></Link>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { checkout } = state;
    return {
        checkout
    }
}

const connectedHeader = connect(mapStateToProps)(Header);
export { connectedHeader as Header };