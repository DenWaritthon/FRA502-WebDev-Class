import React, { use, useEffect } from 'react'

function UseEffectBasic() {
    const [count, setCount] = React.useState(0)
    useEffect(() => {
        console.log('UseEffectBasic mounted or count changed:', count)
    }, [count])

    return (
        <div>
            UseEffectBasic
            <br />
            <button onClick={() => setCount(count + 1)}>countup</button>
            <p>Count: {count}</p>   
        </div>
    )
}

export default UseEffectBasic