import React, { Component } from 'react';
import { Computers } from "./components/Computers"
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';
import Search from "./components/Search";
import {ButtonMore} from "./components/ButtonMore";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            searchInput: '',
            findItems: [],
            renderData: [],
            quantity: null,
            count: 10
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/data/notebook.json')
            .then(responce => {
                return responce.json()
            })
            .then(data => {
                this.setState({items: data, renderData: data.slice(0,10), quantity: data.length, findItems: data})
            })
    }

    searchChange = (e) => {
        e.preventDefault();
        this.setState({searchInput: e.target.value})
    };

    searchClick = (e) => {
        e.preventDefault();
        const { searchInput } = this.state;
        const filterArray = this.state.items.filter((item) =>
            `${item.data.find((n) => n.name === 'Manufacturer').value} ${item.data.find((n) => n.name === 'Model').value}`.toLowerCase().indexOf(searchInput.toLowerCase().trim()) !== -1
        );
        this.setState({findItems: filterArray, quantity: filterArray.length, renderData: filterArray.slice(0, 10)})
    };

    moreClick = () => {
        const { findItems, renderData, count } = this.state;
        this.setState({renderData: findItems.slice(0, renderData.length + count)});
    };

    render() {
        const { items, searchInput, renderData, quantity } = this.state;
        return (
            <div className="App">
                <Grid fluid>
                    <Search
                        searchClick={this.searchClick}
                        searchChange={this.searchChange}
                        searchInput={searchInput}
                    />
                    <Row>
                        <Col md={3}>
                        </Col>
                        <Col md={9}>
                            {
                                items.length && (
                                    <Computers renderData={renderData}/>
                                )
                            }
                        </Col>
                    </Row>
                    <ButtonMore
                        quantity={quantity}
                        renderData={renderData}
                        moreClick={this.moreClick}
                    />
                </Grid>

            </div>
        );
    }
}

export default App;
