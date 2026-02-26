import React, { useMemo, useState ,useEffect } from 'react'
import Background from './component/Background'
import Action from './component/Action'
import LogShow from './component/LogShow'
import './App.css'

const API_BASE = 'http://10.61.200.60/fibo6550/counter'

function getRangeDates(range) {
  const now = new Date()

  switch (range) {
    case '15m':
      return { from: new Date(now.getTime() - 5 * 60 * 1000), to: now }
    case '30m':
      return { from: new Date(now.getTime() - 30 * 60 * 1000), to: now }
    case '1h':
      return { from: new Date(now.getTime() - 60 * 60 * 1000), to: now }
    case '2h':
      return { from: new Date(now.getTime() - 2 * 60 * 60 * 1000), to: now }
    case '1d':
      return { from: new Date(now.getTime() - 24 * 60 * 60 * 1000), to: now }
    case '2d':
      return { from: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000), to: now }
    case 'all':
      return { from: new Date('2000-01-01T00:00:00.000Z'), to: now }
    default:
      return { from: now, to: now }
  }
}

function App() {
  // count states
  const [man, setMan] = useState(0)
  const [woman, setWoman] = useState(0)

  // dropdown range
  const [range, setRange] = useState('all')

  // logs shown in LogShow
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

  // load logs function
  const loadLogs = async (r = range) => {
    const { from, to } = getRangeDates(r)

    const url =
      `${API_BASE}/api/logs/${encodeURIComponent(from.toISOString())}/${encodeURIComponent(to.toISOString())}`

    const res = await fetch(url)
    if (!res.ok) {
      console.error('loadLogs failed', await res.text())
      return
    }

    const rows = await res.json()

    const mapped = rows.map((row) => ({
      man: row.male_count,
      woman: row.female_count,
      total: row.total_count,
      iso: row.created_at,
    }))

    setLogs(mapped)
  }

  // save log function
  const save = async () => {
    const url = `${API_BASE}/api/save`
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        male_count: man,
        female_count: woman,
        total_count: total,
      }),
    })
    if (!res.ok) {
      console.error('save failed', await res.text())
      return
    }

    resetAll()
    loadLogs(range)
  }

  useEffect(() => {
    loadLogs(range)
  }, [range])

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
          range={range}
          onRangeChange={setRange}
        />
      </div>
    </div>
  )
}

export default App