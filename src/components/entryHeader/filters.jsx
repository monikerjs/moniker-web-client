
import React from 'react'

export default class Filter extends React.Component {
    constructor() {
        super()

        this.filters = [
            'Common',
            'Uncommon',
            'Rare'
        ]
    }

    render() {
        var filters = this.filters.map( filter => {
            return <li className="EntryHeader-Filter" key={ 'filters-' + filter }>{ filter }</li>
        })

        return (
            <div className="u-pullRight">
                <div className="EntryHeader-Label u-pullRight">Filters</div>
                <ul className="EntryHeader-Filters">
                    { filters }
                </ul>
            </div>
        )
    }
}
