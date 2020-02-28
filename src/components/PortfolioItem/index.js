/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaMoneyBillWave, FaLayerGroup, FaEllipsisV } from 'react-icons/fa';

import api from '../../services/api';
import { Creators as PortfolioActions } from '../../store/ducks/portfolios';

import {
  Container,
  Header,
  Details,
  Icon,
  Title,
  Description,
  IconText,
  ButtonOptions,
  MenuOptions,
  MenuContainer,
  MenuButton,
} from './styles';

export default function PortfolioItem({ portfolio }) {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  function handleShowMenu(e) {
    e.preventDefault();
    setShowMenu(!showMenu);
  }

  function handleEdit(e) {
    e.preventDefault();
    setShowMenu(false);
    dispatch(PortfolioActions.edit(portfolio));
  }

  async function handleDelete(e) {
    e.preventDefault();
    setShowMenu(false);

    const confirmation = window.confirm(
      `Are you sure you want to delete the portfolio ${portfolio.name}?`
    );

    if (confirmation) {
      const { userId, id } = portfolio;
      const res = await api.delete(`/api/users/${userId}/portfolios/${id}`);
      if (res.status === 200) {
        dispatch(PortfolioActions.deleted(portfolio));
      }
    }
  }

  return (
    <Container>
      <MenuContainer>
        <ButtonOptions type="button" onClick={handleShowMenu}>
          <FaEllipsisV color="#333333" title="Options" />
        </ButtonOptions>

        {showMenu ? (
          <MenuOptions>
            <MenuButton type="button" onClick={handleEdit}>
              Edit
            </MenuButton>
            <MenuButton type="button" onClick={handleDelete}>
              Delete
            </MenuButton>
          </MenuOptions>
        ) : null}
      </MenuContainer>

      <Link to={`portfolios/${portfolio.id}`}>
        <Header>
          <Title>{portfolio.name}</Title>
          <Description>{portfolio.description}</Description>
        </Header>
      </Link>

      <Details>
        <Icon>
          <FaMoneyBillWave color="#006400" title="Total value of Portfolio" />
          <IconText>{portfolio.totalValueOfPortfolio}</IconText>
        </Icon>
        <Icon>
          <FaLayerGroup color="#0080ff" title="Amount of Assets in Portfolio" />
          <IconText>{portfolio.amountOfAssets}</IconText>
        </Icon>
      </Details>
    </Container>
  );
}
