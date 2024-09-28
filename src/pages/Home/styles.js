import {styled} from 'styled-components'

export const Container = styled.div`

  display: grid;
  grid-template-areas: 
  "PageHeader"
  "TitleAndBtn"
  "MyMovies";
  height: 100vh;

  > div:nth-of-type(1) {
    grid-area: TitleAndBtn;
    display: flex;
    place-content: center;
    gap: 746px;
    margin: 50px 0;
  }

  > div:nth-of-type(2) {
    grid-area: MyMovies;
    display: grid;
    overflow-y: auto;
  }

  .addTitle {
    width: 207px;
    margin-right: 18px;
  }

  .linkHref {
  text-decoration:none;
}

`

