import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.primary};
  padding: 30px 30px;
  border-radius: 2px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: ${props => props.theme.colors.text};
  font-family: 'Kalam', sans-serif;
`;

// .loginBox h1 {

// }

// .loginBox .link-button {
//   color: #EBEBEB;
//   align-self: flex-end;
// }
