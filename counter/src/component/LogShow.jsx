import React from 'react'
import './LogShow.css'

function LogShow() {
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
          <div id="logEmpty" className="log-empty" hidden>
            There is no data saved yet. Click save button to add the first item.
          </div>
          <ol id="logList" className="log-list"></ol>

          <div className="log-actions">
            <button id="btnClearLog" className="btn-red" type="button">Clear all history</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogShow