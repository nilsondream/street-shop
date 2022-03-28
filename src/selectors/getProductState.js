import { products } from "../data/products"

export const getProductState = (state) => {

    const validState = ['new'];

    if ( !validState.includes(state)) {
        throw new Error(`${state} no es un publisher válido`)
    }

    return products.filter(product => product.state === state);
}