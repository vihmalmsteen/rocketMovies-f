import {styled} from 'styled-components'


export const Container = styled.div`
    width: 1137px;
    height: 250px;
    border-radius: 16px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    padding: 32px;
    justify-self: center;
    margin-bottom: 24px;
    h3 {
        font-size: 24px;
        color: #F4EDE8;
        margin-bottom: 8px;
    }
    p {
        text-align: justify;
        height: 90px;
        overflow-y: auto;
    }

    .hrefLink {
        text-decoration: none;
        color: white;
    }
`