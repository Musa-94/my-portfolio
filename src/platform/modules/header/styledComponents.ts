import styled from 'styled-components';

const navBarWidth = 333;
const wrapperPadding = 30;
const logoTextFontSize = 24;
const logoContainerSize = 50;

const textColor = '#ffffff'; //TODO MOVE TO THEMES
const logoTextColor = '#000000'; //
const logoBackgroundColor = '#ffffff';
const wrapperBackgroundColor = '#000000';

interface ILink {
    isLogo?: boolean;
}

export const Wrapper = styled.header`
  width: 100%;
  background-color: ${wrapperBackgroundColor};
  display: flex;
  padding: 0 ${wrapperPadding}px;
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Logo = styled.div`
  width: ${logoContainerSize}px;
  height: ${logoContainerSize}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${logoBackgroundColor};
`;

export const LogoText = styled.span`
  font-size: ${logoTextFontSize}px;
  color: ${logoTextColor}px;
`;

export const NavBar = styled.nav`
  width: ${navBarWidth}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled.a<ILink>`
  width: 100%;
  height: 100%;
  font-size: ${logoTextFontSize}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.isLogo ? logoTextColor : textColor};
  text-decoration: none;
  
  & :hover {
    opacity: 0.3%;
  }
`;
