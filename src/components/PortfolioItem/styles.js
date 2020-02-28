import styled from 'styled-components';

export const Container = styled.div`
  width: 260px;
  height: 130px;

  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;
`;

export const Header = styled.div`
  height: 70px;
  max-height: 70px;
`;

export const Title = styled.strong`
  display: block;
  color: ${props => props.theme.colors.textInverse};
`;

export const Description = styled.span`
  font-size: ${props => props.theme.fonts.sizeSmall};
  color: #888;
  margin-top: 2px;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
`;

export const IconText = styled.span`
  margin-left: 10px;
  color: ${props => props.theme.colors.primary};
`;

export const MenuContainer = styled.div`
  position: relative;
`;

export const MenuOptions = styled.div`
  position: absolute;
  right: 0;
  top: 17px;
  background-color: ${props => props.theme.colors.primary};
  padding: 10px;
  width: 100px;
`;

export const MenuButton = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  width: 100%;
  margin-bottom: 5px;
  border-bottom: 1px solid ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.text};
  text-align: start;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonOptions = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    cursor: pointer;
  }
`;
