import {styled} from 'styled-components'

export const Container = styled.span`
  border: none;
  border-radius: 8px;
  background-color: ${({theme}) => theme.COLORS.TAG_BG};
  color: ${({theme}) => theme.COLORS.GRAY};
  padding: 6px 16px;
  margin-right: 8px;
`

