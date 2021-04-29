import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  @media screen and (max-width: 1100px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;
