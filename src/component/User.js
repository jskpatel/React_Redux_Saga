import React from 'react'

function User({ user }) {
    return (
        <ul key={user.id}>
            <li>Id : {user.id}</li>
            <li>Name : {user.name}</li>
            <li>Username : {user.username}</li>
            <li>Email : {user.email}</li>
            <li>Website : {user.website}</li>
            <li>Phone : {user.phone}</li>
        </ul>
    )
}

export default User