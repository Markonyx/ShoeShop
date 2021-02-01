import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/header/header';
import { HomePage } from './components/HomePage';
import { CheckoutPage } from './components/checkout/CheckoutPage';
import  { OrderHistoryPage }  from './components/orderHistory/OrderHistoryPage';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={HomePage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/orders" component={OrderHistoryPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
