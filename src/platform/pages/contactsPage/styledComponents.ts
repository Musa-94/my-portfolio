import styled from 'styled-components';

interface IIcon {
    img: string;
}

const iconSize = 60;
const iconContainerSize = 264;
const imageContainerSize = 600;
const iconContactFontSize = 24;
const iconContainermargin = 10;

const iconContactColor = '#000000';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  width: ${iconContainerSize}px;
  height: ${iconSize}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${iconContainermargin}px;
`;

export const Icon = styled.span<IIcon>`
  width: ${iconSize}px;
  height: ${iconSize}px;
  background: url("${props => props.img}");
  background-repeat: no-repeat;
`;

export const IconContact = styled.span`
  font-size: ${iconContactFontSize}px;
  color: ${iconContactColor};
`;

export const ImageContainer = styled.div`
  width: ${imageContainerSize}px;
`;

export const Image = styled.img``;

