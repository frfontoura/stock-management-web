import styled from 'styled-components';

export const InputText = styled.input`
  height: 32px;
  font-size: 14px;
  color: ${props => props.theme.colors.inputText};
  border: 0;
  border-radius: 2px;
  padding: 5px;
  margin-bottom: 10px;
`;

export const Error = styled.span`
  margin-top: -8px;
  margin-bottom: 12px;
  color: ${props => props.theme.colors.danger};
  font-style: italic;
`;
