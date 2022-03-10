import { combineReducers } from "redux"
import { getAllDataReducer } from './Reducers'



const rootReducers = combineReducers({
    getAllData: getAllDataReducer
})

export default rootReducers