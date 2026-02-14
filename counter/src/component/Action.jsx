import React from 'react'
import Counter from './Counter'
import './Card.css'
import './FooterAction.css'

function Action() {
  return (
    <section className="card">
      <header className="card-header">
        <div>
          <div className="title">User Counting System</div>
          <div className="subtitle">Increase/decrease, save with date and time, reset to 0.</div>
        </div>
      </header>

      <div className="card-body">
        <div className="counter">
          <Counter userName={'Man'} />
          <Counter userName={'Woman'} />

          <div className="actions-footer">
            <button id="btnSave" className="btn-green" type="button">save</button>
            <button id="btnReset" className="btn-red" type="button">reset</button>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Action