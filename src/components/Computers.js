import React, { Component } from 'react';

class Computers extends Component {
    state = {
        listItem: this.props.data
    };

    render () {
        const { listItem } = this.state;
        console.log(listItem)

        return (
            <div>

            </div>
        )
    }
}

export { Computers }