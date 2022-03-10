import { all } from 'redux-saga/effects'
import usersaga from './UserSaga'



export default function* rootSaga() {
    yield all([
        usersaga()
    ])
}