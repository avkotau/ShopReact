import {INCREMENT, DECREMENT, ADDPRODUCT, CHANGECURRENCY} from "../actions/actions";

const productAddReducer = (state = {product: []}, action) => {
    debugger
    let newState = [];
    switch (action.type) {
        case INCREMENT:
            break;

        case DECREMENT:
            break;

        case ADDPRODUCT:
            debugger

            const product = action.product

            const existingProduct = state.product.find(x => x.id === product.id)

            if (!existingProduct) {
                //state.product = [...state.product, ...[product]]

                state.product.push(product);
                newState.product = [...state.product]
                return newState
            }


    }
    return state
}
export const changeCurrency = (state = [], action) => {
    switch (action.type) {
        case CHANGECURRENCY:
            // const currency = action.currency
            //
            // newCurrency = state = currency;
            // return newCurrency
            debugger;
            let choosedCurrency = action.currency === "USD" ? "\uFF04"
                : action.currency === "GBP" ? "\u00A3"
                    : action.currency === "AUD" ? "\uFF04"
                        : action.currency === "RUB" ? "\u20BD" : "\uFFE5"
            return {
                ...state,
                currency: action.currency,
                currencySign: choosedCurrency
            }
    }
    return state
}


// const findProductIndex = (state, productID) => {
//     return state.id !== productID;
// };

export default productAddReducer;

