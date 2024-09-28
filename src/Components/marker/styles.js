import {styled} from 'styled-components'

export const Container = styled.button`
    display: flex;
    place-content: center;
    align-items: center;
    height: 56px;
    min-width: 113.16px;
    border: none;
    border-radius: 10px;

    font-size: 16px;
    margin: auto 0;
    cursor: pointer;
    &:active{
        transform: scale(0.95);
        transition: transform 0.1s ease-out;
    }
    transition: all 0.1s ease-out;
    svg {
        width: 24px;
        height: 24px;
        color: ${({theme}) =>  theme.COLORS.PINK};
    }
    color: white;
    background-color: ${({theme, $isactive}) => $isactive ? theme.COLORS.BTN_BG : '#000000'};
    border: ${({$isactive}) => $isactive ? 'solid 1px gray' : 'dashed 1px gray'};

    input {
        border: none;
        background-color: transparent;
        color: white;
        font-size: 16px;        
    }
`

