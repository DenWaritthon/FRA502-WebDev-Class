import React, { useMemo, useState } from 'react'
import Background from './component/Background'
import Action from './component/Action'
import LogShow from './component/LogShow'
import './App.css'

function App() {
  // count states
  const [man, setMan] = useState(0)
  const [woman, setWoman] = useState(0)

  // log: { man, woman, total, iso }
  const [logs, setLogs] = useState([])
  
  // total count memoized value
  const total = useMemo(() => man + woman, [man, woman])

  // increment/decrement functions
  const incMan = () => setMan(v => v + 1)
  const decMan = () => setMan(v => Math.max(0, v - 1))
  const incWoman = () => setWoman(v => v + 1)
  const decWoman = () => setWoman(v => Math.max(0, v - 1))

  // reset counts to zero function
  const resetAll = () => {
    setMan(0)
    setWoman(0)
  }

  // save log function
  const save = async () => {
  await fetch('http://localhost:3000/counter/save', { // Update with your server's URL and endpoint
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      male_count: man,
      female_count: woman,
      total_count: man + woman,
    }),
  })
    const now = new Date().toISOString()
    const entry = { man, woman, total: man + woman, iso: now }
    setLogs(prev => [entry, ...prev].slice(0, 500))
    resetAll()
  }

  // clear all history function
  const clearAllHistory = () => {
    const ok = confirm('Do you want to clear all history?')
    if (!ok) return
    setLogs([])
  }

  // render
  return (
    <div>
      <Background />
      <div className='app'>
        <Action
          man={man}
          woman={woman}
          total={total}
          onIncMan={incMan}
          onDecMan={decMan}
          onIncWoman={incWoman}
          onDecWoman={decWoman}
          onSave={save}
          onResetAll={resetAll}
        />
        <LogShow
          logs={logs}
        />
      </div>
    </div>
  )
}

export default App