import { Link } from "react-router-dom";
import { StyledProductCard } from "../styles";

const ProductCard = ({ id, name, price, category, state}) => {

    const imgPath = `/assets/${id}.jpg`;

    return (
        <StyledProductCard>
            <div className="product-card">
                <Link to={`/product/${id}`}><img src={ imgPath } alt={category} /></Link>
                <p>{name}<br/>{price}</p>
                <span>{state}</span>
            </div>
        </StyledProductCard>
    )
}

export default ProductCard