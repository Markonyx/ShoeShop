import React from 'react';
import { connect } from 'react-redux';
import { orderHistoryActions } from '../../store/actions';

class CheckoutPage extends React.Component {

    state = {
        shoes: this.props.checkout,
        totalPrice: 0,
        name: '',
        surname: '',
        address: ''
    }

    componentDidMount() {
        this.totalPrice();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmitOrder = (e) => {
        e.preventDefault();
        let user = {
            name: this.state.name,
            surname: this.state.surname,
            address: this.state.address
        }
        
        let order = this.state.shoes;
        
        this.props.order(user, order);
        this.setState({
            name: '',
            surname: '',
            address: ''
        })
    }

    totalPrice = () => {
        let total = 0;
        this.state.shoes.cart.forEach(element => {
            total += element.price;
        });
        this.setState({
            totalPrice: total
        })
    }

    render() {
        return (
            <div>
                <br />
                <h3 style={{ textAlign: 'center' }}>Checkout</h3>
                <form onSubmit={this.onSubmitOrder}>
                    <div className="form-group col-6">
                        <label htmlFor="name"><b>Name</b></label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.handleChange} name="name" id="name" placeholder="Enter your name" /><br />
                        <label htmlFor="surname"><b>Surname</b></label>
                        <input type="text" className="form-control" value={this.state.surname} onChange={this.handleChange} name="surname" id="surname" placeholder="Enter your name" /><br />
                        <label htmlFor="address"><b>Address</b></label>
                        <input type="text" className="form-control" value={this.state.address} onChange={this.handleChange} name="address" id="address" placeholder="Enter your name" />
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="submit" className="btn btn-primary">Order</button>
                </form>
                <br />
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.shoes.cart.map((shoe, index) => {
                            return <tr key={index}>
                                <td>{shoe.name}</td>
                                <td>{shoe.price}</td>
                            </tr>
                        })}
                        <tr>
                            <td>TOTAL</td>
                            <td>{this.state.totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
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

function mapDispatchToProps(dispatch) {
    return {
        order: (order, user) => {
            dispatch(orderHistoryActions.addToOrderHistory(order, user));
        }
    }
}

const connectedCheckoutPage = connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
export { connectedCheckoutPage as CheckoutPage };
