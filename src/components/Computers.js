import React, { Component } from 'react';
import {Button, Form, FormGroup, FormControl} from 'react-bootstrap';
import {Computer} from "./Computer";

class Computers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: props.data.length,
            searchInput: '',
            count: 10,
            renderData: props.data.slice(0, 10),
            findItems: props.data
        };
    }

    searchChange = (e) => {
        e.preventDefault();
        this.setState({searchInput: e.target.value})
    };

    searchClick = (e) => {
        e.preventDefault();
        const { findItems, searchInput } = this.state;
        const filterArray = findItems.filter((item) =>
            `${item.data.find((n) => n.name === 'Manufacturer').value} ${item.data.find((n) => n.name === 'Model').value}`.toLowerCase().indexOf(searchInput.toLowerCase().trim()) !== -1
        );
        this.setState({findItems: filterArray, quantity: filterArray.length, renderData: filterArray.slice(0, 10)})
        //this.setState({renderData: filterArray, quantity: filterArray.length})
    };

    moreClick = () => {
        const { findItems, renderData, count } = this.state;
        this.setState({renderData: findItems.slice(0, renderData.length + count)});
    };

    /*manList () {
        const { data } = this.props;
        const allManList = data.map((item) => {
            return item.find((n) => n.name === 'Manufacturer').value;
        });
        let uniqueManList = [... new Set(allManList)]
        console.log(uniqueManList)
    }*/

    visibleButton() {
        if (this.state.quantity > 0 && this.state.quantity <= this.state.renderData.length) {
            return <h4>Всего {this.state.quantity} товаров</h4>;
        } else if (this.state.quantity >= this.state.renderData.length) {
            return <Button onClick={this.moreClick}>Показать ещё</Button>;
        } else if (this.state.quantity === 0) {
            return <h4>Товаров не найдено</h4>;
        }
    }

    render () {
        const { searchInput, renderData } = this.state;

        return (
            <div>
                <Form inline className="search">
                    <FormGroup>
                        <FormControl
                            onChange={this.searchChange}
                            value={searchInput}
                            type="text"
                            placeholder="Seeeearch"
                        />
                    </FormGroup>
                    <Button onClick={this.searchClick} type="submit">Search</Button>
                </Form>
                {
                    renderData.map((item) => (
                        <Computer key={item.id} data={item.data}/>
                    ))
                }
                <div className="showMore">
                    {
                        /*(this.state.quantity > 0 && this.state.quantity <= this.state.count) ? <h4>Всего {this.state.quantity} товаров</h4> :
                            (this.state.quantity >= this.state.count) ? <Button onClick={this.moreClick}>Показать ещё</Button> :
                                <h4>Товаров не найдено</h4>*/
                        this.visibleButton()
                    }
                </div>
            </div>
        )
    }
}

export { Computers }