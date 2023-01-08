import styled, {keyframes} from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const StyledSpinner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: relative;
    width: 128px;
    height: 128px;
    border: var(--size-md) solid;
    border-color: var(--opacity-light-main) transparent var(--opacity-light-main) transparent;
    border-radius: 50%;
    animation: ${spin} 850ms linear infinite;
  }

  div::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--opacity-light-main);
    width: 20%;
    height: 20%;
    border-radius: 50%;
  }
`