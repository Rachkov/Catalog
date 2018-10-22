import React, { Component } from 'react';

export default class ComputerInfo extends Component {
    render() {
        const {data} = this.props;
        const manufacturer = data.find((n) => n.name === 'Manufacturer').value;
        const model = data.find((n) => n.name === 'Model').value;
        return(
            <div>
                <h1>{manufacturer} {model}</h1>
            </div>
        )
    }
}