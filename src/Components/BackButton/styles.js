import {styled} from 'styled-components'


export const Container = styled.button`
    border: none;
    background: none;
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 16px;
    display: flex;
    /* width: min-content; */
    svg {
        width: 24px;
        height: 24px;
    }
    cursor: pointer;
    &:active {
        color: ${({theme}) => theme.COLORS.DARKPINK};
    }
`

