// External Packages
import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { routes } from '../configs/Routing';
// #toDo: create 404 error page displayed when user can't login.

// eslint-disable-next-line import/no-anonymous-default-export
export default ({childProps}) =>
    <BrowserRouter>
        <Switch>
            {
                routes.map((route)=> {
                    return (
                        <Route exact path={route.path}  component={route.component} props={childProps} key={route.key}/> 
                    )
                })
            }
        </Switch>
    </BrowserRouter>
