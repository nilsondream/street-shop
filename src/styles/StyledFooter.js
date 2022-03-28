import styled from 'styled-components/macro';

const StyledFooter = styled.nav`
    min-height: 75vh;
    bottom: 0;
    padding: 150px 150px 100px 150px;

    .footer-top, .footer-bottom{
        
        display: flex;
        align-items: center;
        height: 250px;

        h1{
            //color: var(--blue);
            //-webkit-text-stroke: 3px var(--black);
            text-transform: uppercase;
            font-family: var(--font-title);
            font-size: 300px;
        }
    }

    .footer-top{
        justify-content: flex-end;

        span{
            content: '';
            margin-right: 50px;
            background-color: var(--black);
            height: 3px;
            width: 100%;
            display: inline-block; 
        }
    }

    .footer-bottom{
        justify-content: space-between;

        .footer-links{
            margin-bottom: -150px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0 20px;
            font-size: var(--fz-lg);
            font-weight: bold;
            text-transform: uppercase;

            .links{
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                a{
                    &:hover{
                        transform: translateX(5px);
                        color: var(--blue);
                    }
                }
            }
        }
    }

    @media (max-width: 412px){
        min-height: auto;
        padding: 50px 20px 20px 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .footer-top, .footer-bottom{
            height: 75px;

            h1{
                font-size: 85px;
            }
        }

        .footer-top{
            span{
                height: 1px;
                margin-right: 20px;
            }
        }

        .footer-bottom{
            .footer-links{
                margin-bottom: 0px;
                //gap: 10px;
                white-space: nowrap;

                .none{
                    display: none;
                }
            }
        }
    }
`

export default StyledFooter;