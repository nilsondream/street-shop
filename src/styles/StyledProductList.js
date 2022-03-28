import styled from 'styled-components/macro';

const StyledProductList = styled.div`
    h1{
        padding: 200px 150px 100px 150px;
        //-webkit-text-stroke: 1px var(--blue);
        //color: var(--blue);
        text-align: center;
        text-transform: uppercase;
        font-family: var(--font-title);
        font-size: 300px;
    }

    .products{
        padding: 0 150px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 50px 0;
    }

    @media (max-width: 412px){
        h1{
            font-size: 85px;
            margin-top: 80px;
            padding: 20px;
        }

        .products{
            padding: 20px;
            grid-template-columns: 1fr;
        }
    }
`

export default StyledProductList