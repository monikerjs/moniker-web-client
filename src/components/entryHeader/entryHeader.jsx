
import React from 'react'
import Category from './category.jsx'
import Filters from './filters.jsx'

export default class EntryHeader extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <header className="EntryHeader u-cf">
                <Category category={ this.props.category } />
                <Filters />
            </header>
        )
    }
}
