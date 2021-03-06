
import React from 'react'
import Router from 'react-router'

import './utils/typekit'

import dispatcher from './dispatchers/appDispatcher'
import Header from './components/header/header.jsx'
import EntryView from './views/entry/entryView.jsx'


let DefaultRoute = Router.DefaultRoute
//var Link = Router.Link
let Route = Router.Route
let RouteHandler = Router.RouteHandler


class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        console.log( '[App] render' )
        return (
            <div>
                <Header />
                <RouteHandler />
            </div>
        )
    }
}


var routes = (
    <Route name="app" handler={ App } path="/">
        <DefaultRoute handler={ EntryView } />
    </Route>
)

Router.run( routes, Router.HistoryLocation, Handler => {
    React.render( <Handler />, document.body )
})
