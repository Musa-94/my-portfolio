import styled from 'styled-components';

const wrapperWidth = 540;
const titleFontSize = 64;
const informationPadding = 30;
const descriptionFontSize = 24;
const informationFontSize = 18;

const titleFontSizeMobileScreen = 39;
const descriptionFontSizeMobileScreen = 15;

const textColor = '#000000';

export const Wrapper = styled.div`
  width: ${wrapperWidth}px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const textStyles = `
    color: ${textColor};
    text-align: center;
`;

export const Title = styled.span`
  font-size: ${titleFontSize}px;
  text-transform: uppercase;
  ${textStyles};

  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: ${titleFontSizeMobileScreen}px;
  }
`;

export const Description = styled.span`
  font-size: ${descriptionFontSize}px;
  padding: ${informationPadding}px;
  ${textStyles};

  @media screen and (max-width: 500px) {
    font-size: ${descriptionFontSizeMobileScreen}px;
    padding: 0;
  }
`;

export const Information = styled.p`
  font-size: ${informationFontSize}px;
  padding: ${informationPadding}px;
  ${textStyles};

  @media screen and (max-width: 500px) {
    font-size: ${descriptionFontSizeMobileScreen}px;
    padding: 0;
  }
  
`;
