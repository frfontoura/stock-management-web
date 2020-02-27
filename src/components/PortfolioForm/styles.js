import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div``;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.text};
  margin-bottom: 10px;
`;
