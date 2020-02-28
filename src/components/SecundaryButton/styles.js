import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${props => props.theme.colors.backgroundInverse};
  color: ${props => props.theme.colors.textInverse};
  border: none;
  border-radius: 2px;
  padding: 5px;
  margin-bottom: 10px;

  &:hover {
    background-color: rgba(221, 221, 221, 0.8);
    cursor: pointer;
  }
`;
