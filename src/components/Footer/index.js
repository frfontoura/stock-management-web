import React from 'react';
import { useSelector } from 'react-redux';
import { GoMarkGithub } from 'react-icons/go';

import { Container, ExternalLink } from './styles';

export default function Footer() {
  const user = useSelector(state => state.users.user);

  return user ? (
    <Container>
      <ExternalLink
        href="https://github.com/frfontoura"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GoMarkGithub color="#ebebeb" /> Desenvolvido por frfontoura
      </ExternalLink>
    </Container>
  ) : null;
}
