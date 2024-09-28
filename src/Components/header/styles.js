import {styled} from 'styled-components'

export const Container = styled.header`
  grid-area: PageHeader;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 116px;
  border-bottom: solid 1px ${({theme}) => theme.COLORS.BACKGROUND_700};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  > div {
    display: flex;
  }

  > div div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 1px;
    margin-right: 8px;
  }

  > h1 {
    color: ${({theme}) => theme.COLORS.PINK};
  }

  > div img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
  }

  > input {
    border: none;
    border-radius: 10px;
    width: 630px;
    height: 56px;
    padding: 18px;
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    background-color: #262529;
    margin: 0 64px;
  }

  span {
    font-weight: bold;
    font-size: 14px;
  }

  a {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    text-decoration: none;
  }

  .hrefLink {
    text-decoration: none;
  }

  .signOutLink {
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }
`