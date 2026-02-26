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

function LogShow({ logs, range, onRangeChange }) {
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
          
          <div className="log-actions" >
            <label >Show :</label>
            <select value={range} onChange={(e) => onRangeChange(e.target.value)}>
              <option value="30m">last 30 min</option>
              <option value="1h">last 1 hr</option>
              <option value="1d">last 1 day</option>
              <option value="1w">last 1 week</option>
              <option value="1M">last 1 month</option>
              <option value="all">All</option>
            </select>
          </div>

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
        </div>
      </div>
    </section>
  )
}

export default LogShow