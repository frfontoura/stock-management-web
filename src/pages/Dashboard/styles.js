import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  padding: 20px;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const FormContainer = styled.aside`
  width: 320px;
  background: ${props => props.theme.colors.primary};
  border-radius: 2px;
  padding: 20px;
  margin-right: 20px;

  @media (max-width: 650px) {
    width: 100%;
  }
`;
