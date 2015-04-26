
import React from 'react'

export default class BaseView extends React.Component {
    constructor() {
        super()
    }

    log() {
        console.log( '[' + this.className + ']', ...arguments )
    }
}
