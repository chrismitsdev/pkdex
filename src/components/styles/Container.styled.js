import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-block: var(--size-huge);
  padding-inline: var(--size-xxl);
`

export const StyledFlexContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`