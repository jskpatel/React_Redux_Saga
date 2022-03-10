import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from './reducers/Index'
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./sagas/Index";

const sagaMiddleWare = createSagaMiddleware()


const store = compose(
    applyMiddleware(sagaMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
    (createStore)(rootReducers)

sagaMiddleWare.run(rootSaga)

export default store