import React from 'react';
import { Wrapper } from './styledComponents';
import CardInfo from '../../modules/cardInfo/CardInfo';
import { configSite } from '../../../config';

const KnowledgePage = () => {
    const { knowledgePageCards } = configSite;

    return (
        <Wrapper>
            {
                knowledgePageCards.map(card =>
                    <CardInfo
                        key={card.titleText}
                        titleText={card.titleText}
                        descriptionText={card.descriptionText}
                    />
                )
            }
        </Wrapper>
    );
};

export default React.memo(KnowledgePage);
