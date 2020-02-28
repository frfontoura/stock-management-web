import React from 'react';

import { Button } from './styles';

export default function PrimaryButton({ text, type }) {
  return <Button type={type}>{text}</Button>;
}
