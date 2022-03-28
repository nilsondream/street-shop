import styled from 'styled-components/macro';

const StyledProduct = styled.div`
    padding: 0 150px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .wrapper-product{
        margin-top: 80px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        img{
            width: 600px;
            object-fit: cover;
        }

        .product-data{
            display: flex;
            flex-direction: column;
            justify-content: center;

            .price-name{
                display: flex;
                justify-content: space-between;
                gap: 50px;

                p{
                    font-family: var(--font-title);
                    font-size: 125px;
                    line-height: 105px;

                    :nth-child(2){
                        color: var(--blue);
                    }
                }
            }

            span{
                margin: 20px 0;
                content: '';
                height: 1px;
                width: 100%;
                background-color: var(--black);
                display: block;
            }

            .buttons{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;

                button{
                    cursor: pointer;
                    font-family: var(--font);
                    text-transform: uppercase;
                    font-size: 20px;
                    font-weight: bold;
                    background-color: transparent;
                    border: 1px solid var(--black);
                    padding: 20px 0;

                    :nth-child(2){
                        background-color: var(--black);
                        color: var(--white);
                    }

                    :nth-child(3){
                        background-color: var(--blue);
                        border: 0;
                        color: var(--white);
                    }
                }
            }
        }
    }

    @media (max-width: 412px){
        padding: 0 20px;

        .wrapper-product{
            margin-top: 50px;
            grid-template-columns: 1fr;

            img{
                width: 350px;
                margin-bottom: 25px;
            }

            .product-data{
                .price-name{
                    gap: 35px;

                    p{
                        font-size: 55px;
                        line-height: 55px;
                    }
                }
                .buttons{
                    grid-template-columns: 1fr;
                    gap: 10px;

                    button{
                        padding: 15px;
                    }
                }
            }
        }
    }
`

export default StyledProduct