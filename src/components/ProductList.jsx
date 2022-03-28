import { getProductCategory } from "../selectors/getProductCategory"
import ProductCard from "./ProductCard";
import { StyledProductList } from '../styles'

const ProductList = ({ category }) => {

    const products = getProductCategory(category);

    return (
        <StyledProductList>

            <h1>{category}s</h1>

            <div className="products">
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            {...product}
                        />
                    ))
                }
            </div>
        </StyledProductList>
    )
}

export default ProductList