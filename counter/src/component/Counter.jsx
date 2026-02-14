import React from 'react'
import './Counter.css'
import './Button.css'

function Counter({ userName, value, onInc, onDec }) {
  return (
    <div className="display">
      <div className="label">Number of {userName} users</div>
      <div className="value">{value}</div>

      <div className="actions">
        <button className="btn-blue" type="button" onClick={onInc}>+</button>
        <button className="btn-red" type="button" onClick={onDec}>-</button>
      </div>
    </div>
  )
}

export default Counter