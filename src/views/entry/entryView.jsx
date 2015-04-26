
import React from 'react'
import BaseView from '../base.jsx'

import EntryHeader from '../../components/entryHeader/entryHeader.jsx'

export default class EntryView extends BaseView {
    constructor() {
        super()

        this.className = 'EntryView'

        this.state = {
            category: 'Girls'
        }
    }

    onHandler() {
        console.log( 'handler' )
    }

    render() {
        this.log( 'render' )
        return (
            <div className="EntryView">
                <EntryHeader category={ this.state.category } />
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
