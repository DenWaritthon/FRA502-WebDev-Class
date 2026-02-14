import React from 'react'
import './Counter.css'
import './Button.css'

function Counter({ userName }) {
  return (
    <div className="display">
      <div className="label">Number of {userName} users</div>
      <div className="value" id={`count${userName}`}>0</div>

      <div className="actions">
        <button id={`btnInc${userName}`} className="btn-blue" type="button">+</button>
        <button id={`btnDec${userName}`} className="btn-red" type="button">-</button>
      </div>
    </div>
  )
}

export default Counter