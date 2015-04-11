
import React from 'react';

export default class HeaderView extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log( '[Header]:: render');
        return (
            <header className="Header">
                <span className="Header-logo">M</span>
            </header>
        );
    }
}
