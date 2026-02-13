import React, { useEffect } from 'react'

const url = 'https://api.github.com/users'

function FetchBasic() {
    const [users, setUsers] = React.useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const resp = await fetch(url)
            const data = await resp.json()
            console.log('FetchBasic data:', data)
            setUsers(data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    return (
        <div>
            FetchBasic
            <br />
            {
                users.map(user => (
                    <div key={user.id}>
                        <img src={user.avatar_url} alt={user.login} width="50" />
                        <span>User : {user.login}</span>
                    </div>
                ))
            }
            
        </div>
    )
}

export default FetchBasic