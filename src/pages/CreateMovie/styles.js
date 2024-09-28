import {styled} from 'styled-components'

export const Container = styled.div `
    display: grid;
    grid-template-areas: 
    "PageHeader"
    "Contents";

    > .PageHeader {
        grid-area: PageHeader;
        position: sticky;
        top: 0;
        z-index: 10;
    }

    input, textarea {
        outline: none;
    }

    > .main {
        overflow-y: auto;
        width: 1137px;
        grid-area: Contents;
        margin: auto;
        justify-content: center;
        margin-top: 24px;
        h1 {
            margin: 24px 0 24px 0;
        }
        > div {
            display: flex;
            gap: 50px;
        }

        p {
            font-size: 20px;
            color: ${({theme}) => theme.COLORS.GRAY_100};
            margin-top: 40px;
        }
    
        .Markers {
            background-color: black;
            width: 100%;
            min-height: 88px;
            border-radius: 10px;
            margin: 24px 0 40px 0;
            padding: 0 10px;
        }

        .saveBtns {
            width: 100%;
            margin-bottom: 20px;
        }
    }

    .hrefLink {
        text-decoration: none;
    }
`

