import styled from 'styled-components/macro';

const StyledNavbar = styled.nav`
    //background-color: var(--white);
    mix-blend-mode: difference;
    padding: 20px 150px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;

    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--white);
        
        .nav-left{
            width: 200px;
            display: flex;
            gap: 30px;

            a{
                font-family: var(--font-bold);
                text-transform: uppercase;
                font-size: var(--fz-xxl);
                color: var(--white) !important;
                //transition: var(--transition);

                &:hover{
                    color: var(--blue) !important;
                }
            }
        }

        .logo{
            img{
                margin-bottom: -5px;
                width: 50px;
            }
        }

        .nav-right{
            //padding-right: 10px;
            width: 200px;
            display: flex;
            justify-content: end;
            gap: 20px;

            svg{
                cursor: pointer;
                font-size: 25px;
                transition: var(--transition);

                &:hover{
                    transform: scale(1.1);
                    fill: var(--blue);
                    stroke: var(--blue);
                }
            }

            .icons{
                display: none;
            }
        }
    }

    @media (max-width: 412px){
        padding: 7.5px 20px;

        .navbar{
            align-items: center;
            .nav-left{
                display: none;
            }

            .logo{
                font-size: 50px;
                color: var(--blue);
            }

            .nav-right{
                width: auto;

                svg{
                    display: none;
                }

                .icons{
                    display: block;
                    font-size: 30px;
                }
            }
        }
    }
`;

export default StyledNavbar;