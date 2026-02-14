import React from 'react'
import Background from './component/Background'
import Action from './component/Action'
import LogShow from './component/LogShow'
import './App.css'

function App() {
  return (
    <div>
      <Background />
      <div className='app'> 
        <Action />
        <LogShow />
      </div>
    </div>
  )
}

export default App