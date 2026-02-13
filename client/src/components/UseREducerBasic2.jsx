import React, { useReducer, useState } from 'react'

const peopleData = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
]

const defaultState = {
    people: peopleData
}

const reducer = (state, action) => {
    console.log(action)
    if (action.type === 'REMOVE_ITEM') {
        // return new state without the removed item
        return { ...state, people: state.people.filter(el => el.id !== action.payload.id) }
    } else if (action.type === 'RESET_LIST') {
        // return state with the original people list
        return { ...state, people: peopleData }
    } else if (action.type === 'CLEAR_LIST') {
        // return state with an empty people list
        return { ...state, people: [] }
    }
    return state
}

function UseREducerBasic2(id) {
    // const [data, setData] = useState(defaultState.people)
    const [state, dispatch] = useReducer(reducer, defaultState)

    const handleRemove = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { id } })
    }

    const handleReset = () => {
        dispatch({ type: 'RESET_LIST' })
    }

    const handleClear = () => {
        dispatch({ type: 'CLEAR_LIST' })
    }

    return (
        <div>
            {
                state.people.map(el => (
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

export default UseREducerBasic2