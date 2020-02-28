import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: ${props => props.theme.fonts.sizeRegular};
  color: ${props => props.theme.colors.text};

  &:hover {
    cursor: pointer;
  }
`;
