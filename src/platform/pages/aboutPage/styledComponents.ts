import styled from 'styled-components';

const imageContainerSize = 550;

const imageContainerSizeSmall = 470;
const imageContainerMobileScreen = 250;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
   @media screen and (max-width: 1100px) {
    flex-wrap: wrap;
   }
`;

export const ImageContainer = styled.div`
  width: ${imageContainerSize}px;

  @media screen and (max-width: 1100px) {
    width: ${imageContainerSizeSmall}px;
  }
  
  @media screen and (max-width: 550px) {
    width: ${imageContainerMobileScreen}px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
