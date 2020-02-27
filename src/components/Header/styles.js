import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => props.theme.colors.secundary};
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.text};
  font-family: 'Kalam', sans-serif;
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
