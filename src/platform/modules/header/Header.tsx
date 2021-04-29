import React from 'react';
import {
    Logo,
    Link,
    NavBar,
    Wrapper,
    LogoContainer,
} from './styledComponents';

const Header = () => {
    return (
        <Wrapper>
            <LogoContainer>
                <Logo>
                    <Link href={'#/'}
                          isLogo={true}
                          children='M'
                    />
                </Logo>
            </LogoContainer>
            <NavBar>
                <Link href={'#/about'}
                      children='About' //TODO TEXTS MOVE TO TRANSLATES
                />
                <Link href={'#/knowledge'}
                      children='Knowledge'
                />
                <Link href={'#/contacts'}
                      children='Contacts'
                />
            </NavBar>
        </Wrapper>
    );
};

export default React.memo(Header);
