import React, { Component } from 'react'
import {FormGroup} from 'react-bootstrap'
import {Man} from "./Man"

class Filters extends Component {
    render() {
        const {manList} = this.props;

        return (
            <FormGroup className="filters">
                <h4>Производитель</h4>
                {
                    manList.map((i) => (
                        <Man key={i} man={i}/>
                    ))
                }
            </FormGroup>
        )
    }
}

export {Filters};