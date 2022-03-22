import {combineReducers} from "redux";
import productAddReducer from "./reducers";
import {changeCurrency, countProducts} from "./reducers"

debugger
export default combineReducers({
    countProducts: productAddReducer,
    currency: changeCurrency,
    // units: countProducts,

})

