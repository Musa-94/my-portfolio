import React, { Suspense, lazy } from 'react';
import {
    Route,
    Switch,
    HashRouter as Router,
} from 'react-router-dom';
import HomePage from '../homePage/HomePage';
import KnowledgePage from '../knowledgePage/KnowledgePage';

const AboutPage = lazy(() => import('../aboutPage/AboutPage'));
const ContactsPage = lazy(() => import('../contactsPage/ContactsPage'));

const Routers = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path={'/'} exact component={HomePage}/>
                    <Route path={'/about'} component={AboutPage}/>
                    <Route path={'/contacts'} component={ContactsPage}/>
                    <Route path={'/knowledge'} component={KnowledgePage}/>
                </Switch>
            </Suspense>
        </Router>
    );
};

export default React.memo(Routers)
