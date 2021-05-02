interface ICard {
    titleText: string;
    informationText?: string;
    descriptionText?: string;
}

const homePageCards: Array<ICard> = [
    {
        titleText: '<mentor>',
        informationText: 'Gain real experience of building websites and providing code reviews. Build your portfolio and help others achieve their goals.'
    },
    {
        titleText: '<coder>',
        informationText: 'Front End Developer who focuses on writing clean, elegant and efficient code.'
    },
];

const aboutPageCard: ICard = {
    titleText: '<aboute me>',
    descriptionText: 'I\'m Front-End developer based in sunny Baku, Azerbaijan.',
    informationText: 'I enjoy turning complex problems into simple, beautiful and intuitive designs. When I\'m not pushing pixels, you\'ll find me cooking, gardening or working out in the park.'
}

const contactsPageCard: ICard = {
    titleText: '<contact me>',
    descriptionText: 'Do you speak Azerbaijan? It\'s ok if you don\'t, I speak Russian too.'
}

const knowledgePageCards: Array<ICard> = [
    {
        titleText: '<front-end>',
        descriptionText: `
            JavaScript
            HTML/CSS
            
            React.js
            Redux
            Redux-Saga
            React-Router-Dom
            Styled-Component
            Reselect
            I18next
            
            TypeScript
            Angular
            RxJs
            NgRx
            
            Webpack
            Gulp
        `,
    },
    {
        titleText: '<back-end>',
        descriptionText: `
            Node.js

            Express.js
            
            MongoDB
            
            Nodemon
        `,
    },
];


export {
    homePageCards,
    aboutPageCard,
    contactsPageCard,
    knowledgePageCards,
};
