import styled, { createGlobalStyle } from 'styled-components';

const wrapperHeight = 75;
const bodyBlockPadding = 30;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeaderBlock = styled.header`
  width: 100%;
  height: ${wrapperHeight}px;
  display: flex;
`;

export const BodyBlock = styled.div`
  width: 100%;
  min-height: calc(100vh - ${wrapperHeight}px);
  padding: 0 ${bodyBlockPadding}px;
`;
