import React, { Component } from 'react';
import { Computers } from "./components/Computers"
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';
import Search from "./components/Search";
import {ButtonMore} from "./components/ButtonMore";
import {Filters} from "./components/Filters";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            searchParams: {},
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
            });
    }

    manList() {
        const allManList = this.state.items.map((item) => {
            return item.data.find((n) => n.name === 'Manufacturer').value;
        });
        let uniqueManList = [...new Set(allManList)];
        return uniqueManList;
    }

    dateList()  {
        const allDateList = this.state.items.map((item) => {
            return item.data.find((n) => n.name === 'Date').value;
        });
        let uniqueDateList = [...new Set(allDateList)];
        return uniqueDateList
    }

    searchChange = (type, value) => {
        const { searchParams } = this.state;
        this.setState({ searchParams: { ...searchParams, [type]: value }});
    };

    searchClick = () => {
        const { searchParams } = this.state;
        const filterManArr = searchParams['filter-man'] || [];
        const filterDateArr = searchParams['filter-date'] || [];
        const searchString = searchParams.search || '';
        const filterArray = this.state.items.filter((item) => {
            const manufacturer = item.data.find((n) => n.name === 'Manufacturer').value;
            const date = item.data.find((n) => n.name === 'Date').value;
            const str = `${item.data.find((n) => n.name === 'Manufacturer').value} ${item.data.find((n) => n.name === 'Model').value}`;
            const resultMan = filterManArr.indexOf(manufacturer) !== -1 || !filterManArr.length;
            const resultDate = filterDateArr.indexOf(date) !== -1 || !filterDateArr.length;
            const resultStr = str.toLowerCase().indexOf(searchString.toLowerCase().trim()) !== -1;
            return resultMan && resultDate && resultStr;
        });
        this.setState({findItems: filterArray, quantity: filterArray.length, renderData: filterArray.slice(0, 10)})
    };

    moreClick = () => {
        const { findItems, renderData, count } = this.state;
        this.setState({renderData: findItems.slice(0, renderData.length + count)});
    };

    render() {
        const { items, renderData, quantity } = this.state;
        return (
            <div className="App">
                <Grid fluid>
                    <Search
                        searchClick={this.searchClick}
                        searchChange={this.searchChange}
                    />
                    <Row>
                        <Col md={3}>
                            <Filters
                                manList={this.manList()}
                                dateList={this.dateList()}
                                searchClick={this.searchClick}
                                searchChange={this.searchChange}
                            />
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
