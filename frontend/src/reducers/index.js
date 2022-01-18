import {combineReducers} from "redux";
import productAddReducer from "./reducers";


export default combineReducers({
    product: productAddReducer,
})

