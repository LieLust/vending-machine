import React from 'react'

const PurchasedProductList = ({ purchaseHistory }) => {
  const purchaseHistoryItem = Object.keys(purchaseHistory).map((el, key) => (
    <p key={key}>{purchaseHistory[el].name}</p>
  ))
  return (
    <div>
      <h3>Purchase History</h3>
      {purchaseHistoryItem}
    </div>
  )
}

export default PurchasedProductList
