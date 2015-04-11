
import React from 'react';
import Router from 'react-router';

import dispatcher from './dispatchers/appDispatcher';
import Header from './components/header/header.jsx';


let DefaultRoute = Router.DefaultRoute;
//var Link = Router.Link;
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;


class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log( '[App]:: render' );
        return (
            <div>
                <Header />

                <RouteHandler />
            </div>
        );
    }
}


class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log( '[Main]:: render' );
        return (
            <h2>Hello Main</h2>
        );
    }
}


var routes = (
    <Route name="app" handler={ App } path="/">
        <DefaultRoute handler={ Main } />
    </Route>
);

Router.run( routes, Router.HistoryLocation, Handler => {
    React.render( <Handler />, document.body );
});
