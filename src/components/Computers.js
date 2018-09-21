import React, { Component } from 'react';
import {Computer} from "./Computer";

class Computers extends Component {

    /*manList() {
        const allManList = this.props.data.map((item) => {
            return item.data.find((n) => n.name === 'Manufacturer').value;
        });
        let uniqueManList = [...new Set(allManList)];
        console.log(uniqueManList)
        return uniqueManList
    }*/

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