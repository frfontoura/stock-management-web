import React from 'react';

import PortfolioForm from '../../components/PortfolioForm';
import PortfolioList from '../../components/PortfolioList';

import { Container, Content, FormContainer } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <FormContainer>
        <PortfolioForm />
      </FormContainer>

      <Content>
        <PortfolioList />
      </Content>
    </Container>
  );
}
