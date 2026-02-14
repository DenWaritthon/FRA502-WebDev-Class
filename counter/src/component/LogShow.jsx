import React from 'react'
import './LogShow.css'
import './Button.css'

function formatThaiDateTimeAD(iso) {
  const dt = new Date(iso)
  return dt.toLocaleString('th-TH-u-ca-gregory', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

function LogShow({ logs, onClearAll, onRemoveOne }) {
  return (
    <section className="card">
      <header className="card-header">
        <div>
          <div className="title">Data logging display section.</div>
          <div className="subtitle">Show the number of records, along with the date and time.</div>
        </div>
      </header>

      <div className="card-body">
        <div className="log">
          {!logs.length && (
            <div className="log-empty">
              There is no data saved yet. Click save button to add the first item.
            </div>
          )}

          <ol className="log-list">
            {logs.map((item, idx) => (
              <li className="log-item" key={`${item.iso}-${idx}`}>
                <div className="row">
                  <span className="pill">{formatThaiDateTimeAD(item.iso)}</span>
                  <button type="button" className="btn-red" onClick={() => onRemoveOne(idx)}>
                    Delete
                  </button>
                </div>

                <div className="row">
                  <span className="subtitle">Man</span>
                  <span className="count">{item.man}</span>
                </div>

                <div className="row">
                  <span className="subtitle">Woman</span>
                  <span className="count">{item.woman}</span>
                </div>

                <div className="row">
                  <span className="subtitle">Total</span>
                  <span className="count">{item.total}</span>
                </div>
              </li>
            ))}
          </ol>

          <div className="log-actions">
            <button className="btn-red" type="button" onClick={onClearAll}>
              Clear all history
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogShow