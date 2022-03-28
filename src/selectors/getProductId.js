import { products } from "../data/products"

export const getProductId = (id = '') => {
    return products.find(product => product.id === id);
}