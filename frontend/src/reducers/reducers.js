import {INCREMENT, DECREMENT, ADDPRODUCT} from "../actions/actions";

const productAddReducer = (state = {product:[]}, action) => {
    let newState = [];
    switch (action.type) {
        case INCREMENT:
            break;

        case DECREMENT:
            break;

        case ADDPRODUCT:

            debugger;
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

// const findProductIndex = (state, productID) => {
//     return state.id !== productID;
// };

export default productAddReducer;
