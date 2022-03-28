import styled from 'styled-components/macro';

const StyledSidebar = styled.div`
    z-index: 99;
    position: fixed;
    top: 0;
    right: 0;
    width: 75vw;
    height: 100vh;
    //mix-blend-mode: normal !important;
    background-color: var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s all ease-in-out;
    opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0')};
    right: ${({ isOpen }) => ( isOpen ? '0' : '-100%')};

    .icon{
        position: absolute;
        top: 20px;
        right: 20px;

        svg{
            color: var(--white);
            font-size: 30px;
        }
    }

    .wraper-links{
        display: flex;
        flex-direction: column;
        
        a{
            font-family: var(--font-title);
            text-transform: uppercase;
            font-size: 80px;
            //transition: var(--transition);

            &:hover{
                color: var(--blue) !important;
            }
        }
    }

    .login-search-cart{
        position: absolute;
        bottom: 100px;
        display: flex;
        gap: 20px;
        flex-direction: row;

        svg{
            font-size: 30px;
            color: var(--white);
            transition: var(--transition);

            &:hover{
                transform: scale(1.1);
                fill: var(--blue);
                stroke: var(--blue);
            }
        }
    }
    

    @media (max-width: 412px){
    }
`

export default StyledSidebar