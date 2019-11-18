import React, { Fragment } from 'react'

const ProductList = ({ products, balance }) => {
  const ProductListItem = Object.keys(products).map((el, key) => (
    /* read the json then make cards for each item */
    <div key={key} className='col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-5'>
      <div class='card'>
        <img src={products[el].image} class='card-img-top' alt='...' />

        <div class='card-body'>
          <h5 class='card-title'>{products[el].name}</h5>
          <p class='card-text'>
            Price: <strong>{products[el].price}€</strong> Count:{' '}
            <strong>{products[el].count}</strong>
          </p>
        </div>

        <div class='card-footer'>
          {products[el].count <= 0 ? (
            <strong className='card-text text-danger'>Solde Out</strong>
          ) : balance < products[el].price ? (
            <p className='card-text'>
              Load <strong>{products[el].price - balance}€</strong> more
            </p>
          ) : (
            <p className='card-text'>
              <button className='btn btn-primary'>Buy</button>
            </p>
          )}
        </div>
      </div>
    </div>
  ))
  return (
    <Fragment>
      <div className='row'>{ProductListItem}</div>
    </Fragment>
  )
}

export default ProductList
