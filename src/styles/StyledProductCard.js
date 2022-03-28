import styled from 'styled-components/macro';

const StyledProductCard = styled.div`
    .product-card{
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 400px;
            object-fit: cover;
            padding-bottom: 20px;
        }

        p{
            text-transform: uppercase;
            text-align: center;
            font-weight: bold;
            font-size: var(--fz-xl);
        }

        span{
            color: var(--blue);
            text-transform: uppercase;
            font-size: var(--fz-xl);
            font-weight: bold;
        }
    }

    @media (max-width: 412px){
        .product-card{
            img{
                width: 300px;
            }
        }
    }
`

export default StyledProductCard