import React from 'react'

function ConditonBasic() {
    console.log(Boolean('')) // false
    console.log(Boolean(0)) // false
    console.log(Boolean(null)) // false
    console.log(Boolean(NaN)) // false
    console.log(Boolean(undefined)) // false

    const user = "Admin"
    // if (user) {
    //     return <div>Welcome, {user}!</div>
    // }else {
    //     return <div>Please log in.</div>
    // }

    return (
        <div>
            {user === 'ADMIN' ? `Welcome Admin!` 
            : user ? `Welcome, ${user}!` 
            : `Please log in.`}
        </div>
    )
}

export default ConditonBasic