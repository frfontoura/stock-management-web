import React from 'react';

import { Button } from './styles';

export default function PrimaryButton({ text }) {
  return <Button type="submit">{text}</Button>;
}
