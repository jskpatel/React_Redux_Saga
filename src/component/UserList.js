import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from './User'
import { getData } from './../redux/actions/Index'

function UserList() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.getAllData.users)
    const error = useSelector(state => state.getAllData.error)
    const loading = useSelector(state => state.getAllData.loading)

    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <>
            {user.loading && <p>...Loading</p>}

            {user.length > 0 && user.map(u => <User user={u} />)}

            {user.length === 0 && !loading && <div>Data not found</div>}

            {error && !loading && <p>{error}</p>}
        </>
    )
}

export default UserList