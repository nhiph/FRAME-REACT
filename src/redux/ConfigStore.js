// setup Redux
import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { LoadingReducer } from './reducers/Loading.js'

const rootReducer = combineReducers({
// chua cac state cua ung dung
    LoadingReducer,
})

export const store = createStore(rootReducer,applyMiddleware(reduxThunk));