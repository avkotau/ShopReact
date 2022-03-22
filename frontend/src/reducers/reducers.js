import {INCREMENT, DECREMENT, ADDPRODUCT, CHANGECURRENCY} from "../actions/actions";

const productAddReducer = (state = {product: [], count: []}, action) => {
    debugger
    let newState = [];

    switch (action.type) {

        case ADDPRODUCT: {
            debugger

            let product = action.product

            let existingProduct = state.product.find(x => x.id === product.id)

            if (!existingProduct) {


                state.product.push(product);
                state.count.push(action.count);
                newState.product = [...state.product]

                newState.count = [...state.count]
                return newState
            }
            break;// added!
        }


    }
    return state
}

export const changeCurrency = (state = {currencySign: "\uFF04"}, action) => {
    switch (action.type) {

        case CHANGECURRENCY:
            debugger
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

// export const countProducts = (state = {product: []}, action) => {
//     debugger
//
//     switch (action.type) {
//         case INCREMENT: {
//
//             debugger
//             const payload = action.payload;
//             let cart = state;
//             console.log(state.product)
//
//
//             let productID = payload.id
//
//
//             const findProductIndex = (cart, productID) => {
//                 return cart.product.findIndex((p) => p.id === productID);
//             };
//             let indexChosenProduct = findProductIndex(cart, productID)
//             if (indexChosenProduct >= 0) {
//
//
//                 const updatedCart = [...cart.product];
//                 const existingProduct = updatedCart[indexChosenProduct];
//                 let updatedUnitsProduct = {
//                     ...existingProduct,
//                     units: existingProduct.units + payload.units,
//
//                 };
//                 updatedCart[indexChosenProduct] = updatedUnitsProduct;
//
//                 state.product = updatedCart
//                 return state
//             } else if (indexChosenProduct < 0) {
//
//                 cart.product.push(payload);
//
//                 //return cart
//             }
//
//             return {...state};
//         }
//
//
//         case DECREMENT:
//
//
//             break;
//     }
//     return state
// }


export default productAddReducer;

