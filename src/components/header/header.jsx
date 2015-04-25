
import React from 'react'

export default class HeaderView extends React.Component {
    constructor() {
        super()
    }

    render() {
        console.log( '[Header] render')
        return (
            <header className="Header u-cf">
                <span className="Header-logo u-pullLeft">M</span>
                <div className="Header-menu u-pullRight">
                    <span className="Header-menuLine"></span>
                    <span className="Header-menuLine"></span>
                    <span className="Header-menuLine"></span>
                </div>
            </header>
        )
    }
}
