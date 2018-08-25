import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Computer} from "./Computer";

class Computers extends Component {
    state = {
        count: 10,
        quantity: 0
    };

    handleClick = (e) => {
        e.preventDefault();
        this.setState({count: this.state.count += 10});
    };

    /*searchChange = (e) => {
        e.preventDefault();
        return e.currentTarget.value
    };*/

    renderTemp () {
        const { data } = this.props;
        let renderData = [];

        const temp = data.map(function (item, index) {
            const man = item.find((n) => n.name === 'Manufacturer').value;
            const mod = item.find((n) => n.name === 'Model').value;
            let str = `${man} ${mod}`;
            if (str.toLowerCase().indexOf(``) !== -1) {
                return <Computer key={index} data={item}/>
            }
        });
        temp.forEach(function (item) {
            if (item !== undefined){
                renderData.push(item)
            }
        });

        this.state.quantity = renderData.length;
        return renderData.slice(0, this.state.count)
    }

    visibleButton () {
        if (this.state.quantity > 0 && this.state.quantity <= this.state.count) {
            return <h4>Всего {this.state.quantity} товаров</h4>
        } else if (this.state.quantity >= this.state.count) {
            return <Button onClick={this.handleClick}>Показать ещё</Button>
        } else if (this.state.quantity === 0) {
            return <h4>Товаров не найдено</h4>
        }
    }

    render () {
        return (
            <div>
                {this.renderTemp()}
                <div className="showMore">
                    {this.visibleButton()}
                </div>
            </div>
        )
    }
}

export { Computers }