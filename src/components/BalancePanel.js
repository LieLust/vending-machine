import React from 'react'

const BalancePanel = ({ balance }) => {
  return (
    <div className='card mb-5'>
      <strong className='card-header'>Balance</strong>
      <div className='card-body'>
        <strong className='card-text'>
          {Math.round(balance * 100) / 100}€
        </strong>
      </div>
      <button
        className='btn btn-primary'
        onClick={() => {
          alert(`vous avez reçu ${Math.round(balance * 100) / 100}€`)
        }}>
        Give back !
      </button>
    </div>
  )
}

export default BalancePanel
