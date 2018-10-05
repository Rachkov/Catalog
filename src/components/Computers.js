import React, { Component } from 'react';
import {Computer} from "./Computer";

class Computers extends Component {

    render () {
        const { renderData } = this.props;

        return (
            <div>
                {
                    renderData.map((item) => (
                        <Computer key={item.id} data={item.data}/>
                    ))
                }
            </div>
        )
    }
}

export { Computers }