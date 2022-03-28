import styled from 'styled-components/macro';

const StyledPageNotFound = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    h1{
        font-family: var(--font-title);
        font-size: 300px;
    }

    button{
        background-color: transparent;
        border: 1px solid var(--black);
        color: var(--black);
        font-size: 30px;
        font-family: var(--font-title);
        text-transform: uppercase;
        padding: 20px 100px;
        transition: var(--transition);

        &:hover{
            background-color: var(--black);
            color: var(--white);
        }
    }
`

export default StyledPageNotFound