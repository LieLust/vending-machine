import React, { Component } from 'react'

/* import Json */
import products from './products'

/* import components */
import ProductList from './components/ProductList'
import BalancePanel from './components/BalancePanel'
import BanknotePanel from './components/BanknotePanel'
import PurchasedProductList from './components/PurchasedProductList'

class App extends Component {
  state = {
    products: products,
    balance: 0
  }
  render() {
    return (
      <div className='App container'>
        <h1
          className='text-center mt-5 pb-3 mb-3'
          style={{ borderBottom: '1px solid grey' }}>
          Vending Machine
        </h1>
        <div className='row'>
          <div className='col-xs-7 col-sm-9'>
            <ProductList
              products={this.state.products}
              balance={this.state.balance}
            />
          </div>
          <div className='col-xs-5 col-sm-3'>
            <BalancePanel />
            <BanknotePanel />
            <PurchasedProductList />
          </div>
        </div>
      </div>
    )
  }
}

export default App
