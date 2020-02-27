import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.text};
  border: none;
  border-radius: 2px;
  padding: 5px;
  margin-bottom: 20px;

  &:hover {
    background-color: rgba(0, 128, 255, 0.8);
    cursor: pointer;
  }
`;
