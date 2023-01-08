import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: var(--main-color);
  box-shadow: 0 var(--size-xsm) var(--size-xxl) 0 var(--opacity-dark-main);

  img {
    max-height: var(--size-huge);
    filter: var(--logo-filter);
  }

  img + div {
    display: flex;
    column-gap: var(--size-xl);
  }

  img + div a {
    width: 40px;
    height: 40px;
    position: relative;
    padding: var(--size-lg);
    border-radius: var(--size-sm);
    background-color: var(--opacity-dark-main);
    color: var(--accent-color);
    transition: 
      background-color var(--long-transition-duration),
      color var(--short-transition-duration);
  }

  img + div a:hover {
    background-color: var(--opacity-light-main);
  }

  img + div a svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 
      width var(--short-transition-duration),
      height var(--short-transition-duration);
  }

  img + div a:hover svg {
    width: var(--size-xxl);
    height: var(--size-xxl);
  }
`