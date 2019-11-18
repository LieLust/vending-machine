import React from 'react'

const BanknotePanel = ({ banknotes, incrementBalance }) => {
  const banknote = Object.keys(banknotes).map((el, key) => (
    <div key={key} className='col-md-6' style={{ marginBottom: '.5em' }}>
      <button
        className='btn btn-primary'
        onClick={() => incrementBalance(banknotes[el])}>
        {banknotes[el]}€
      </button>
    </div>
  ))
  return (
    <div className='card mb-5'>
      <strong className='card-header'>Load banknote</strong>
      <div className='card-body'>
        <div className='row'>{banknote}</div>
      </div>
    </div>
  )
}

export default BanknotePanel
