
import React from 'react'
import classnames from 'classnames'

class Filter {
    constructor( name ) {
        this.name = name
        this.active = false
    }
}

export default class Filters extends React.Component {
    constructor() {
        super()

        // Create filter objects
        this.state = {
            filters: [
                'Common',
                'Uncommon',
                'Rare'
            ].map( filter => {
                return new Filter( filter )
            })
        }

        this.state.filters[ 0 ].active = true
    }

    componentDidMount() {
        this.onClick = this.onClick.bind( this )
    }

    /**
     * Fired on filter click
     */
    onClick( filter ) {
        this.state.filters.forEach( f => {
            // Set active state based on item firing this onClick
            f.active = f.name === filter
        })

        // Update with the new filters
        this.setState({
            filters: this.state.filters
        })
    }

    render() {
        var filters = this.state.filters.map( filter => {
            var onClick = function() {
                this.onClick( filter.name )
            }.bind( this )

            var classes = classnames( 'EntryHeader-Filter', { 'EntryHeader-Filter--isActive': filter.active } )

            return (
                <li className={ classes }
                    key={ 'filters-' + filter.name }
                    onClick={ onClick } >
                    { filter.name }
                </li>
            )
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
