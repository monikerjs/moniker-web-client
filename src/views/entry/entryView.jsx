
import React from 'react'
import BaseView from '../base.jsx'

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
            <div className="EntryView">
                <header className="EntryView-header">
                    <p>EntryView Header</p>
                </header>
                <input className="EntryView-input" />
                <ul className="EntryView-entries">
                    <li className="Entry">
                        <p>Entry #1</p>
                    </li>
                    <li className="Entry">
                        <p>Entry #2</p>
                    </li>
                </ul>
            </div>
        )
    }
}
