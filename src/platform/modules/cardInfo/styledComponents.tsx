import styled from 'styled-components';

const wrapperWidth = 540;
const titleFontSize = 64;
const informationPadding = 30;
const descriptionFontSize = 24;
const informationFontSize = 18;

const textColor = '#000000';

export const Wrapper = styled.div`
  width: ${wrapperWidth}px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const textStyles = `
    color: ${textColor};
    text-align: center;
`;

export const Title = styled.span`
  font-size: ${titleFontSize}px;
  text-transform: uppercase;
  ${textStyles};
`;

export const Description = styled.span`
  font-size: ${descriptionFontSize}px;
  padding: ${informationPadding}px;
  ${textStyles};
`;

export const Information = styled.span`
  font-size: ${informationFontSize}px;
  padding: ${informationPadding}px;
  ${textStyles};
`;
