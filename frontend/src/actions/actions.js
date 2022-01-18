export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDPRODUCT = 'ADDPRODUCT';


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

    return {
        type: ADDPRODUCT,
        product,
    }
}

