import React from 'react';
import { Wrapper } from './styledComponents';
import { homePageCards } from '../../configPortfolio';
import CardInfo from '../../modules/cardInfo/CardInfo';

const HomePage = () => {
    return (
        <Wrapper>
            {
                homePageCards.map(card =>
                    <CardInfo
                        key={card.titleText}
                        titleText={card.titleText}
                        informationText={card.informationText}
                    />
                )
            }
        </Wrapper>
    );
};

export default React.memo(HomePage);
