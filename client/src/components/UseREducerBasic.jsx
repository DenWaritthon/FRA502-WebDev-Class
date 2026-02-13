import React, { useState } from 'react'

const people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
]

function UseREducerBasic(id) {
    const [data, setData] = useState(people)

    const handleRemove = (id) => {
        // alert(`Remove clicked for item with id: ${id}`)
        setData(data.filter(el => el.id !== id))
    }

    const handleReset = () => {
        // alert('Reset clicked')
        setData(people)
    }

    const handleClear = () => {
        // alert('Clear clicked')
        setData([])
    }

    return (
        <div>
            {
                data.map(el => (
                    <div key={el.id}>
                        <h1>{el.name}</h1>
                        <button onClick={() => handleRemove(el.id)}>Remove</button>   
                    </div>
                ))
            }
            <hr />
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    )
}

export default UseREducerBasic