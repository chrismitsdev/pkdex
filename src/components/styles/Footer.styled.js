import styled from 'styled-components'
import {StyledFlexContainer} from './Container.styled'

export const StyledFooter = styled.footer`
  background-color: var(--main-color);
  box-shadow: 0 calc(var(--size-xsm) * -1) var(--size-xxl) 0 var(--opacity-dark-main);
  color: var(--alt-color);
  height: 100%;

  p {
    font-size: var(--size-lg);
  }

  p a {
    margin-left: var(--size-xsm);
    color: var(--accent-color);
  }
`

export const ModifiedContainer = styled(StyledFlexContainer)`
  flex-direction: column;
  align-items: flex-start;
  row-gap: var(--size-sm);
`