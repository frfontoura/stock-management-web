import React from 'react';

import { Button } from './styles';

export default function LinkButton({ text, handleOnClick, styles }) {
  return (
    <Button style={styles} onClick={handleOnClick}>
      {text}
    </Button>
  );
}
