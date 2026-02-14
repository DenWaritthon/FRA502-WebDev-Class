import React from 'react'
import Counter from './Counter'
import './Card.css'
import './Button.css'
import './FooterAction.css'

function Action({
  man,
  woman,
  onIncMan,
  onDecMan,
  onIncWoman,
  onDecWoman,
  onSave,
  onResetAll,
}) {
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
          <Counter
            userName={'Man'}
            value={man}
            onInc={onIncMan}
            onDec={onDecMan}
          />
          <Counter
            userName={'Woman'}
            value={woman}
            onInc={onIncWoman}
            onDec={onDecWoman}
          />

          <div className="actions-footer">
            <button className="btn-green" type="button" onClick={onSave}>save</button>
            <button className="btn-red" type="button" onClick={onResetAll}>reset</button>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Action