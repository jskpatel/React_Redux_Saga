import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED } from './../constants/Index'

const initialState = {
    users: [],
    loading: false,
    error: null
}

export const getAllDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
                // users: payload
                loading: true
            }

        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.users
            }

        case GET_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            }

        default:
            return state
    }

}