import React from 'react';
import { GlobalStyle, Wrapper, HeaderBlock, BodyBlock } from './styledComponents'
import Routers from './Routers';
import Header from '../../modules/header/Header';

const MainPage = () => {
    return (
        <>
            <Wrapper>
                <HeaderBlock>
                    <Header/>
                </HeaderBlock>
                <BodyBlock>
                    <Routers/>
                </BodyBlock>
            </Wrapper>
            <GlobalStyle/>
        </>
    );
};

export default React.memo(MainPage);
