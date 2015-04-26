
import React from 'react'

export default class Category extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="EntryHeader-CategoryWrapper u-pullLeft">
                <div className="EntryHeader-Label">Category</div>
                <div className="EntryHeader-Category">{ this.props.category }</div>
            </div>
        )
    }
}
