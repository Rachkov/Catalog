import React, { Component, Fragment } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from "./App";
import ComputerInfo from "./components/ComputerInfo";

class Routers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            searchParams: {},
            findItems: [],
            renderData: [],
            quantity: null,
            count: 10,
            item: {}
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

    searchChange = (type, value) => {
        const { searchParams } = this.state;
        this.setState({ searchParams: { ...searchParams, [type]: value }});
    };

    getLaptop = (id) => {
        const { items } = this.state;
        const item = items.find((n) => `${n.id}` === id);
        this.setState({ item });
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
        this.setState({ findItems: filterArray, quantity: filterArray.length, renderData: filterArray.slice(0, 10) })
    };

    moreClick = () => {
        const { findItems, renderData, count } = this.state;
        this.setState({ renderData: findItems.slice(0, renderData.length + count) });
    };

    render () {
        const { items, renderData, quantity, item } = this.state;

        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" render={
                            () =>
                                <App
                                    items={items}
                                    renderData={renderData}
                                    quantity={quantity}
                                    searchChange={this.searchChange}
                                    searchClick={this.searchClick}
                                    moreClick={this.moreClick}
                                />
                        }/>
                        <Route path="/laptops/:id" render={() => !!items.length && <ComputerInfo data={item} getLaptop={this.getLaptop}/>}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Routers;