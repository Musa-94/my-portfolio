import React from 'react';
import {
    Title,
    Wrapper,
    Description,
    Information,
} from './styledComponents';

interface IProps {
    titleText: string;
    descriptionText?: string;
    informationText?: string;
}

const CardInfo: React.FC<IProps> = props => {
    const {
        titleText,
        descriptionText,
        informationText,
    } = props;

    return (
        <Wrapper data-at={'card-info'}>
            <Title children={titleText}/>
            {
                descriptionText &&
                <Description children={descriptionText}/>
            }
            {
                informationText &&
                <Information children={informationText} />
            }
        </Wrapper>
    );
};

export default React.memo(CardInfo);
