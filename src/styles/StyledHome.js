import styled from "styled-components/macro";

const StyledHome = styled.div`
    //padding: 0 150px;
        
    .hero{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img{
            width: 100vw;
            height: 100vh;
            object-fit: cover;
            opacity: 50%;
            position: absolute;
        }

        span{
            content: '';
            background-color: black;
            width: 100vw;
            height: 100vh;
            display: block;
            position: absolute;
        }

        .hero-data{
            position: absolute;

            h1{
                text-align: center;
                font-size: 300px;
                line-height: 280px;
                color: var(--white);
                font-family: var(--font-title);
            }

            h6{
                color: var(--white);
                text-align: center;
                font-size: var(--fz-xl);
                font-weight: bold;
            }

            p{
                color: var(--white);
                text-align: center;
                font-size: var(--fz-xl);
                font-weight: bold;
            }
        }
    }

    .hero-title{
        padding: 150px;

        .title-top, .title-bottom{
            
            display: flex;
            align-items: center;
            height: 250px;

            h1{
                text-transform: uppercase;
                font-family: var(--font-title);
                font-size: 300px;
            }
        }

        .title-top{

            span{
                content: '';
                margin-left: 50px;
                background-color: var(--black);
                height: 3px;
                width: 100%;
                display: inline-block;
            }
        }
    }

    @media (max-width: 412px){
        .hero{
                        
            .hero-data{
                padding: 20px;

                h1{
                    line-height: 90px;
                    font-size: 85px;
                }

                p, h6{
                    font-size: var(--fz-md);
                }
            }
        }

        .hero-title{
            padding: 40px 20px 40px 20px;

            .title-top, .title-bottom{
                height: 75px;

                h1{
                    font-size: 85px;
                }
            }

            .title-top{
                span{
                    margin-left: 20px;
                    height: 1px;
                }
            }
        }
    }
`
export default StyledHome