import React, { Component } from 'react';
import {Computer} from "./Computer";

class Computers extends Component {
    renderTemp () {
        const { data } = this.props;
        let temp = null;

        if(data.length) {
            temp = data.map(function (item, index) {
                return <Computer key={index} data={item}/>
            })
        }

        return temp
    }

    render () {
        return (
            <div>
                {this.renderTemp()}
            </div>
        )
    }
}

export { Computers }