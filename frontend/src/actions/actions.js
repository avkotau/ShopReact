export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDPRODUCT = 'ADDPRODUCT';
export const CHANGECURRENCY = 'CHANGECURRENCY';
//payload: {id, units}

export const incrementCount = ( {id, units}) => {
    debugger
    return {
        type: INCREMENT,
        payload: {id, units}
    }
}
export const decrementCount = (decrement) => {
    debugger
    return {
        type: DECREMENT,
        decrement
    }
}
export const addProductToCard = (product, count) => {
    debugger
    return {
        type: ADDPRODUCT,
        product,
        count
    }
}
export const changeCurrency = (currency) => {
    debugger
    return {
        type: CHANGECURRENCY,
        currency,
    }
}

