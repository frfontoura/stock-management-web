import React from 'react';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

export default function Portfolios() {
  const { portfolioId } = useParams();

  return <div>Portfolio {portfolioId}</div>;
}
