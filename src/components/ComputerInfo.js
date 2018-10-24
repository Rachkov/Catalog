import React, { Component } from 'react';

export default class ComputerInfo extends Component {

    render() {
        const { data } = this.props;
        /*const manufacturer = data.find((n) => n.name === 'Manufacturer').value;
        const model = data.find((n) => n.name === 'Model').value;*/
        console.log(data)
        return(
            <div>
                <h1>qwerty</h1>
            </div>
        )
    }
}