import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  list-style: none;

  @media (max-width: 650px) {
    margin-top: 20px;
    grid-template-columns: 1fr 1fr;
  }
`;
