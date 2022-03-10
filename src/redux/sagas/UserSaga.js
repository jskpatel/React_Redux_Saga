import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = 'https://jsonplaceholder.typicode.com/users'

async function getApi() {
    return await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(error => { throw error })
}

function* fetchUsers() {
    try {
        const users = yield call(getApi)
        yield put({ type: 'GET_USERS_SUCCESS', users: users })
    } catch (e) {
        yield put({ type: 'GET_USERS_FAILED', message: e.message })
    }
}

function* watchUsers() {
    yield takeEvery('GET_USERS_REQUEST', fetchUsers)
}

export default watchUsers