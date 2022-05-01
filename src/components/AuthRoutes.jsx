import React, { PureComponent } from 'react';

import { Switch, Route } from 'react-router-dom';
import { longStackSupport } from 'q';
import LogIn from './LogIn/LogIn';
import Register from './Register/Register';
import Checkoutt from './Checkoutt/Checkoutt';
import OrderPreview from './OrderPreview/OrderPreview';

class AuthRoutes extends PureComponent {

    render() {
        return (

                        <Switch>
                           
                      <Route exact path="/auth/login" component={LogIn} />
                      <Route exact path="/auth/register" component={Register} />
                      <Route exact path="/auth/checkout" component={Checkoutt} />
                      <Route exact path="/auth/orderpreview" component={OrderPreview} />


                        </Switch>
                   
        );
    }
}

export default AuthRoutes;