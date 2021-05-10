import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationItems from '../../components/app/navigation-items/Navigationitems';
import Home from '../home/Home';
import Upload from '../upload/Upload';
import classes from './Layout.module.css';

import { actions, AppState } from '../../store/store';
import { useSelector } from 'react-redux';
import Backdrop from '../../components/app/backdrop/Backdrop';
import ErrorPopup from '../../components/app/error-pop-up/ErrorPopup';

function Layout() {

    const showLoader = useSelector((state: AppState) => state.isLoaderVisible);
    const currentError = useSelector((state: AppState) => state.currentError);

    return (
        <div className={classes.LayoutContainer}>
            {showLoader && <Backdrop />}
            <ErrorPopup  />
            <header className={classes.Header}>
                <NavigationItems />
            </header>
            <main>
                <Switch>
                    <Route path="/" exact component={Home} ></Route>
                    <Route path="/upload" component={Upload} ></Route>
                </Switch>
            </main>
        </div>
    );
}

export default Layout;