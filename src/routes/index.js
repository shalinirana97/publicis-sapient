import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../containers/LandingPage';

class Routes extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter >
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/?:filter" component={LandingPage} />
                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}

export default Routes