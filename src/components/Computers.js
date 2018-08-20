import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Computer} from "./Computer";

class Computers extends Component {
    state = {
        count: 10
    };

    handleClick = (e) => {
        e.preventDefault();
        this.state.count += 10;
        this.setState({count: this.state.count})
    };

    renderTemp () {
        const { data } = this.props;

        const temp = data.map(function (item, index) {
            return <Computer key={index} data={item}/>
        });

        return temp.slice(0, this.state.count)
    }

    render () {
        return (
            <div>
                {this.renderTemp()}
                <div className="showMore">
                    <Button onClick={this.handleClick}>Показать ещё</Button>
                </div>
            </div>
        )
    }
}

export { Computers }