export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDPRODUCT = 'ADDPRODUCT';
export const CHANGECURRENCY = 'CHANGECURRENCY';


export const incrementCount = () => {
    return {
        type: INCREMENT
    }
}
export const decrementCount = () => {
    return {
        type: DECREMENT
    }
}
export const addProductToCard = (product) => {
    debugger
    return {
        type: ADDPRODUCT,
        product,
    }
}
export const changeCurrency = (currency) => {
    debugger
    return {
        type: CHANGECURRENCY,
        currency,
    }
}

