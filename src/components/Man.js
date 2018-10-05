import React, {Component} from 'react'
import {Checkbox} from 'react-bootstrap'

class Man extends Component {
    render () {
        const {man} = this.props
        return (
            <Checkbox>{man}</Checkbox>
        )
    }
}

export { Man };