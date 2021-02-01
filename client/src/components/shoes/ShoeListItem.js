import React from 'react';

class ShoeListItem extends React.Component {
    
    state = {
        shoe: {
            name: this.props.name,
            price: this.props.price
        }
    }

    render() {
        return(
            <div className="card col-4">
                <img className="card-img-top" src={this.props.icon} alt="" />
                <div className="card-body">
                    <b>{this.props.name}</b>
                    <div>{this.props.price}</div>
                    <button className="btn btn-primary" onClick={() => this.props.onAddToCart(this.state.shoe)}>Add to cart</button>
                </div>
            </div>
        );
    }
}

export default ShoeListItem;