import {styled} from 'styled-components'


export const Container = styled.div`

    height: 100vh;
    display: grid;
    grid-template-areas: 
    "PageHeader"
    "content";

    > main {
      overflow-y: auto;
      grid-area: content;  
    }

    .aboutAll {
      width: 1137px;
      margin: 40px auto 0;
    }
    
    .aboutMovie {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .aboutUser {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 20px;
    }
    
    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

    p {
      text-align: justify;
      margin: 20px 0 60px;
      max-height: 60vh;
      overflow: auto;
    }

    svg {
      color: ${({theme}) => theme.COLORS.PINK};
    }

    .hrefLink {
      text-decoration: none;
      color: white;
    }
`

