import styled from 'styled-components';

interface IIcon {
    img: string;
}

const iconSize = 60;
const iconContainerSize = 264;
const imageContainerSize = 600;
const iconContactFontSize = 24;
const iconContainerMargin = 10;

const iconSizeMobileScreen = 30;
const iconMarginRightMobileScreen = 15;

const iconContactColor = '#000000';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  @media screen and (max-width: 1100px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const IconContainer = styled.div`
  width: ${iconContainerSize}px;
  height: ${iconSize}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${iconContainerMargin}px;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: ${iconSizeMobileScreen}px;
    justify-content: normal;
  }
`;

export const Icon = styled.span<IIcon>`
  width: ${iconSize}px;
  height: ${iconSize}px;
  background: url('${props => props.img}');
  background-repeat: no-repeat;

  @media screen and (max-width: 500px) {
    width: ${iconSizeMobileScreen}px;
    height: ${iconSizeMobileScreen}px;
    background-size: contain;
    background-position: center;
    margin-right: ${iconMarginRightMobileScreen}px;
  }
`;

export const IconContact = styled.span`
  font-size: ${iconContactFontSize}px;
  color: ${iconContactColor};
`;

export const ImageContainer = styled.div`
  width: ${imageContainerSize}px;
`;

export const Image = styled.img`
  width: 100%;
`;

