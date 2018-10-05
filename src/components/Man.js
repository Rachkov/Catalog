import React, {Component} from 'react'
import {Checkbox} from 'react-bootstrap'

class Man extends Component {
    render () {
        const {man} = this.props
        return (
            <Checkbox className="man-item">{man}</Checkbox>
        )
    }
}

export { Man };