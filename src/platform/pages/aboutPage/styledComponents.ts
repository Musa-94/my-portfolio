import styled from 'styled-components';

const imageContainerSize = 550;

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
  height: ${imageContainerSize}px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
