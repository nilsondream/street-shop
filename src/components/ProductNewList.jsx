import { getProductState } from "../selectors/getProductState"
import ProductCard from "./ProductCard";
import { StyledProductList } from '../styles'

const ProductNewList = ({ state }) => {

    const products = getProductState(state);

    return (
        <StyledProductList>

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

export default ProductNewList