import React, { Component } from 'react';
import { Computers } from "./components/Computers"
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
    state = {
        items: []
    };

    componentDidMount() {
        fetch('http://localhost:3000/data/notebook.json')
            .then(responce => {
                return responce.json()
            })
            .then(data => {
                this.setState({items: data})
            })
    }

    render() {
        const { items } = this.state;
        return (
            <div className="App">
                <Grid fluid>
                    <Row>
                        <Col md={3}>
                        </Col>
                        <Col md={9}>
                            {
                                items.length && (
                                    <Computers data={items}/>
                                )
                            }
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}

export default App;
