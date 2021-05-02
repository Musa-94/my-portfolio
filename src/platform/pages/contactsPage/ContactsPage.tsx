import React from 'react';
import CardInfo from '../../modules/cardInfo/CardInfo';
import { contactsPageCard } from '../../configPortfolio';
import Img from '../../../themes/assets/png/workTime.png'; //TODO MOVE TO THEMES IN OBJECT
import telegramIcon from '../../../themes/assets/svg/telegram.svg';
import instagramIcon from '../../../themes/assets/svg/instagram.svg';
import {
    Icon,
    Image,
    Wrapper,
    IconContact,
    IconContainer,
    ImageContainer,
    InformationContainer,
} from './styledComponents';

const ContactsPage = () => {
    return (
        <Wrapper>
            <InformationContainer data-at={'InformationContainer'}>
                <CardInfo
                    titleText={contactsPageCard.titleText}
                    descriptionText={contactsPageCard.descriptionText}
                />
                <IconContainer>
                    <Icon img={telegramIcon}/>
                    <IconContact children={'+994554330940'}/>
                </IconContainer>
                <IconContainer>
                    <Icon img={instagramIcon}/>
                    <IconContact children={'x.m.m.o@mail.ru'}/>
                </IconContainer>
            </InformationContainer>
            <ImageContainer>
                <Image src={Img}/>
            </ImageContainer>
        </Wrapper>
    );
};

export default React.memo(ContactsPage);
