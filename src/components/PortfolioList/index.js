import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as PortfolioActions } from '../../store/ducks/portfolios';
import api from '../../services/api';

import { Container } from './styles';
import PortfolioItem from '../PortfolioItem';

export default function PortfolioList() {
  const portfolios = useSelector(state => state.portfolios.list);
  const dispatch = useDispatch();
  const userId = useSelector(state => state.users.user.id);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get(`/api/users/${userId}/portfolios`);
      if (res.status === 200) {
        dispatch(PortfolioActions.fetched(res.data));
      }
    };
    fetchData();
  }, [dispatch, userId]);

  return (
    <Container>
      {portfolios.map(p => (
        <PortfolioItem key={p.id} portfolio={p} />
      ))}
    </Container>
  );
}
