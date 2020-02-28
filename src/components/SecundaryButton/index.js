import React from 'react';

import { Button } from './styles';

export default function SecundaryButton({ text, type, onClick }) {
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  );
}
