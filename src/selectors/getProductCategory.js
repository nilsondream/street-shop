import { products } from "../data/products"

export const getProductCategory = (category) => {

    const validCategory = ['hoodie', 'shirt'];

    if ( !validCategory.includes(category)) {
        throw new Error(`${category} no es un publisher válido`)
    }

    return products.filter(product => product.category === category);
}