import {styled} from 'styled-components'


export const MainContainer = styled.main`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 640px 1fr;
    grid-template-areas: 
    "Form ImgBg";

    .hrefLink {
        text-decoration: none;
    }
`


export const DivContainer = styled.div`
    grid-area: Form;
    display: flex;
    flex-direction:column;
    align-items: center;
    align-self: center;

    .central {
        width: 340px;
        margin-bottom: 42px;
        h1 {

            color: ${({theme}) => theme.COLORS.PINK};
            font-size: 48px;
        }
        h2 {
            margin: 48px 0;
        }
    }
    `


export const ImgBgContainer = styled.div`
    height: 100vh;
    grid-area: ImgBg;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

