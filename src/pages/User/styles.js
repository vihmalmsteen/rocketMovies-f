import {styled} from 'styled-components'


export const Container = styled.main`
    .header{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
        height: 144px;
        width: 100%;
    } 

    .backbtn{
        position: absolute;
        top: 56px;
        left: 15px;
    }

    .userLogo {
        display:flex;
        flex-direction:column;
        position: relative;
        top: -88px;
        margin-bottom: -50px;
    }

    .userLogo img {
        height: 186px;
        width: 186px;
        border-radius: 50%;
    }
    .user {
        display: grid;
        justify-items: center;
        justify-content: center;
    }

    .inputsBlock{ 
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-bottom: 24px;
        width: 340px;
    }

    .inputsOne{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .inputsTwo{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .camera{
        width: 48px;
        height: 48px;
        color: red;
        /* border-radius: 50%; */
    }

    .inputsBlock button { 
        margin-bottom: 20px;
        width: 100%;
    }

    .userLogo input {
        display: none;
    }

    .userLogo label {
        align-self: center;
        position: relative;
        top: -40px;
        right: -60px;
        cursor: pointer;
        svg {
            width: 40px;
            height: 40px;
            background-color: ${({theme}) => theme.COLORS.PINK};
            color: black;
            border-radius: 50%;
            border: ${({theme}) => theme.COLORS.PINK} solid 6px;
        }
    }

    .hrefLink {
        text-decoration: none;
    }
`

