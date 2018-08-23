import React, { Component } from 'react';
import {Button, FormControl, FormGroup, Form} from 'react-bootstrap';
import {Computer} from "./Computer";

class Computers extends Component {
    state = {
        count: 10,
        visible: false,
        quantity: 0
    };

    handleClick = (e) => {
        e.preventDefault();
        this.setState({count: this.state.count += 10});
        if (this.state.quantity <= this.state.count) {
            this.setState({visible: true})
        }
    };

    searchChange = (e) => {
        e.preventDefault();
        return e.currentTarget.value
    };

    renderTemp () {
        const { data } = this.props;
        let renderData = [];

        const temp = data.map(function (item, index) {
            const man = item.find((n) => n.name === 'Manufacturer').value;
            const mod = item.find((n) => n.name === 'Model').value;
            let str = `${man} ${mod}`;
            if (str.toLowerCase().indexOf(`g5`) !== -1) {
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

    /*componentDidUpdate () {
        if (this.state.quantity > 0 && this.state.quantity <= this.state.count) {
            this.setState({visible: true})
        }
    }*/


    render () {
        const { data } = this.props;
        const { visible, quantity } = this.state;

        return (
            <div>
                <Form inline className="search">
                    <FormGroup>
                        <FormControl onInput={this.searchChange} type="text" placeholder="Search" />
                    </FormGroup>
                    <Button type="submit">Search</Button>
                </Form>
                {this.renderTemp()}
                <div className="showMore">
                    {
                        !visible && <Button onClick={this.handleClick}>Показать ещё</Button>
                    }
                    {
                        visible && <h4>Всего {quantity} товаров</h4>
                    }
                </div>
            </div>
        )
    }
}

export { Computers }