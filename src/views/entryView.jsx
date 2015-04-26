
import React from 'react'
import BaseView from './base.jsx'

export default class EntryView extends BaseView {
    constructor() {
        super()

        this.className = 'EntryView'
    }

    onHandler() {
        console.log( 'handler' )
    }

    render() {
        this.log( 'render' )
        return (
            <h2>Hello Main</h2>
        )
    }
}
