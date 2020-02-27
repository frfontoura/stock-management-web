import React from 'react';

import Routes from '../../routes';
import Header from '../Header';
import Footer from '../Footer';

import GlobalStyle from '../../styles/global';
import { Container, MainWrapper } from './styles';

export default function Main() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <MainWrapper>
        <Routes />
      </MainWrapper>
      <Footer />
    </Container>
  );
}
