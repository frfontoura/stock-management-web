import React from 'react';

import './styles.css';

export default function PrimaryButton({ text }) {
  return (
    <button className="primary-button" type="submit">
      {text}
    </button>
  );
}
