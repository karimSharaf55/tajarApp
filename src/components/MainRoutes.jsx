import React, { PureComponent } from 'react';

import { Switch, Route } from 'react-router-dom';
import App from '../App';
import AuthRoutes from './AuthRoutes';
import Home from './Home/Home';
import LogIn from './LogIn/LogIn';
import Copyright from './Copyright/Copyright';


class MainRoutes extends PureComponent {

    render() {
        return (

                        <Switch>

                         <Route  path="/auth" component={AuthRoutes} />
                         <Route  path="/home" component={App} />

                        </Switch>
                   
        );
    }
}

export default MainRoutes ;