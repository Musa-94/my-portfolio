import React from 'react';
import { Wrapper, ImageContainer, Image } from './styledComponents';
import CardInfo from '../../modules/cardInfo/CardInfo';
import { aboutPageCard } from '../../configPortfolio';
import Img from '../../../themes/assets/png/miru.png'; //TODO MOVE TO THEMES in OBJECT

const AboutPage = () => {
    return (
        <Wrapper>
            <CardInfo
                titleText={aboutPageCard.titleText}
                descriptionText={aboutPageCard.descriptionText}
                informationText={aboutPageCard.informationText}
            />
            <ImageContainer>
                <Image src={Img}/>
            </ImageContainer>
        </Wrapper>
    );
};

export default React.memo(AboutPage);
