import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getProductId } from "../selectors/getProductId";
import { StyledProduct } from "../styles";

const Product = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const product = useMemo( () => getProductId(id), [id]);
  const imgPath = `/assets/${product.id}.jpg`;

  const handleReturn = () => {
    navigate(-1);
  }

  if (!product) {
    return <Navigate to='/' />
  }

  return (
    <StyledProduct>
      <div className="wrapper-product">
        <img src={imgPath} alt={product.id} />
        <div className="product-data">
          <div className="price-name">
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
          <span />
          <div className="buttons">
            <button>Añadir al carrito</button>
            <button>Comprar ahora</button>
            <button onClick={handleReturn}>Seguir comprando</button>
          </div>
        </div>
      </div>
    </StyledProduct>
  )
}

export default Product