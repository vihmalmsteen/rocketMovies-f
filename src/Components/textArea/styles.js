import {styled} from 'styled-components'


export const Container = styled.textarea`
    background-color: ${({theme}) => theme.COLORS.BTN_BG};
    color: ${({theme}) => theme.COLORS.GRAY_100};
    resize: none;
    width: 100%;
    height: 274px;
    padding: 16px 0 0 16px;
    margin-top: 40px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
`