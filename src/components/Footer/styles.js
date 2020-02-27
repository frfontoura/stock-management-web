import styled from 'styled-components';

export const Container = styled.footer`
  grid-area: footer;
  display: flex;
  background-color: ${props => props.theme.colors.secundary};
  padding: 10px;
  justify-content: flex-end;
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  cursor: pointer;

  &:visited {
    color: ${props => props.theme.colors.text};
  }
`;
