import React from 'react'
import FormInput from './components/FormInput'
import ListBasic from './components/ListBasic'
import UseEffectBasic from './components/UseEffectBasic'
import FetchBasic from './components/FetchBasic'
import ConditonBasic from './components/ConditonBasic'
import UseREducerBasic from './components/UseREducerBasic'
import UseREducerBasic2 from './components/UseREducerBasic2'

function App() {
    const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ]
  return (
    <div>
      {/* <FormInput />
      <ListBasic users={users} />
      <UseEffectBasic />
      <FetchBasic />
      <ConditonBasic />
      <UseREducerBasic />  */}
      <UseREducerBasic2 />
    </div>
  )
}

export default App