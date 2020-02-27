import React, { useState } from 'react';
import { FaMoneyBillWave, FaLayerGroup } from 'react-icons/fa';

import './styles.css';

export default function PortfolioItem({ portfolio }) {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu(e) {
    e.preventDefault();
    setShowMenu(!showMenu);
  }

  return (
    <div className="portfolio-item">
      <button type="button" onClick={handleShowMenu}>
        ...
      </button>

      {showMenu ? (
        <div className="menu">
          <button type="button">Edit</button>
          <button type="button">Delete</button>
        </div>
      ) : null}

      <div className="portfolio-info">
        <strong>{portfolio.name}</strong>
        <span>{portfolio.description}</span>
      </div>
      <div className="portfolio-details">
        <div className="icon">
          <FaMoneyBillWave color="#006400" title="Total value of Portfolio" />
          <span>{portfolio.totalValueOfPortfolio}</span>
        </div>
        <div className="icon">
          <FaLayerGroup color="#c0c0c0" title="Amount of Assets in Portfolio" />
          <span>{portfolio.amountOfAssets}</span>
        </div>
      </div>
    </div>
  );
}
