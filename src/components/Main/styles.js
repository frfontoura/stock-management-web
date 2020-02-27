import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-areas:
    'header'
    'content'
    'footer';

  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-gap: 1px;

  height: 100vh;

  @media (max-width: 768px) {
    grid-template-areas:
      'header'
      'content'
      'footer';

    grid-template-columns: 1fr;
    grid-template-rows:
      auto /* Header */
      1fr /* Content */
      auto; /* Footer */
  }
`;

export const MainWrapper = styled.main`
  grid-area: content;
  display: flex;
  flex: 1;
`;
