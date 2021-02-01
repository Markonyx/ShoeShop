import React from 'react';
import { connect } from 'react-redux';

class OrderHistoryPage extends React.Component {

    state = {
        shoes: this.props.orderHistory.user.cart,
        totalPrice: 0
    }

    componentDidMount() {
        this.totalPrice();
    }

    totalPrice = () => {
        let total = 0;
        this.state.shoes.forEach(element => {
            total += element.price;
        });
        this.setState({
            totalPrice: total
        })
    }

    render() {
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>Order History</h2>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.shoes.map((shoe, index) => {
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
    const { orderHistory } = state;
    return {
        orderHistory
    }
}

const connectedOrderHistoryPage = connect(mapStateToProps)(OrderHistoryPage);
export { connectedOrderHistoryPage as OrderHistoryPage };