import React from 'react';
import { Wrapper } from './styledComponents';
import { configSite } from '../../../config';
import CardInfo from '../../modules/cardInfo/CardInfo';

const HomePage = () => {
    const { homePageCards } = configSite;

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
    )
}

export default React.memo(HomePage);
