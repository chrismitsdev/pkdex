import styled from 'styled-components'

export const StyledButton = styled.button`
  appearance: none;
  background: none;
  border: none;

  font-family: 'Poppins', sans-serif;
  font-size: var(--size-lg);
  font-weight: 400;
  max-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: var(--size-md);
  border-radius: var(--size-sm);
  padding: var(--size-lg);
  background-color: var(--main-color);
  color: var(--alt-color);
  transition: background-color var(--short-transition-duration);
  cursor: pointer;

  &:hover {
    background-color: var(--opacity-light-main);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: var(--opacity-dark-main);
    color: var(--opacity-light-main);
    transform: unset;
    cursor: not-allowed;
  }
`