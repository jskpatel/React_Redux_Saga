import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED } from './../constants/Index'

export const getData = users => {
    return {
        type: GET_USERS_REQUEST,
        payload: users
    }
}