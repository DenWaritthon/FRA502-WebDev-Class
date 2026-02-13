import React from 'react'

function ListBasic({ users }) {

    return (
        <div>ListBasic
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListBasic