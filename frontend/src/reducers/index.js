import {combineReducers} from "redux";
import productAddReducer from "./reducers";
import {changeCurrency} from "./reducers"

debugger
export default combineReducers({
    product: productAddReducer,
    currency: changeCurrency
})

