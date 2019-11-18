import React from 'react'

const BalancePanel = ({ balance }) => {
  return (
    <div className='card mb-5'>
      <strong className='card-header'>Balance</strong>
      <div className='card-body'>
        <strong className='card-text'>{balance}€</strong>
      </div>
      <button
        className='btn btn-primary'
        onClick={() => {
          alert(`vous avez reçu ${balance}€`)
        }}>
        Give back !
      </button>
    </div>
  )
}

export default BalancePanel
