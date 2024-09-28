import {styled} from 'styled-components'


export const Container = styled.button`
    /* width: 207px; */
    width: 100%;
    height: 48px;
    border-radius: 8px;
    font: ${({theme}) => theme.COLORS.BLACK};
    font-size: 16px;
    background-color: ${({theme}) => theme.COLORS.PINK};
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: black;
        color: ${({theme}) => theme.COLORS.DARKPINK};
    }
    &:active {
        background-color: ${({theme}) => theme.COLORS.DARKPINK};
        color: black;
    }
    transition: background-color 0.1s ease-in-out;

    > svg {
        width: 24px;
        height: 24px;
    }
`
