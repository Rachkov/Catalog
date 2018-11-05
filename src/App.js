import React, { Component } from 'react';
import { Computers } from "./components/Computers"
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';
import Search from "./components/Search";
import {ButtonMore} from "./components/ButtonMore";
import {Filters} from "./components/Filters";

class App extends Component {
    manList() {
        const allManList = this.props.items.map((item) => {
            return item.data.find((n) => n.name === 'Manufacturer').value;
        });
        let uniqueManList = [...new Set(allManList)];
        return uniqueManList;
    }

    dateList()  {
        const allDateList = this.props.items.map((item) => {
            return item.data.find((n) => n.name === 'Date').value;
        });
        let uniqueDateList = [...new Set(allDateList)];
        return uniqueDateList
    }

    render() {
        const { items, renderData, quantity, searchChange, searchClick, moreClick } = this.props;
        return (
            <div className="App">
                <Grid fluid>
                    <Search
                        searchClick={searchClick}
                        searchChange={searchChange}
                    />
                    <Row>
                        <Col md={3}>
                            <Filters
                                manList={this.manList()}
                                dateList={this.dateList()}
                                searchClick={searchClick}
                                searchChange={searchChange}
                            />
                        </Col>
                        <Col md={9}>
                            {
                                !!items.length && (
                                    <Computers renderData={renderData}/>
                                )
                            }
                        </Col>
                    </Row>
                    <ButtonMore
                        quantity={quantity}
                        renderData={renderData}
                        moreClick={moreClick}
                    />
                </Grid>
            </div>
        );
    }
}

export default App;
