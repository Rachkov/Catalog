import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import ComputerInfo from "./ComputerInfo";

class Computer extends Component {
    render () {
        const { data } = this.props;

        const manufacturer = data.find((n) => n.name === 'Manufacturer').value;
        const model = data.find((n) => n.name === 'Model').value;
        const diagonal = data.find((n) => n.name === 'Diagonal').value;
        const scrRes = data.find((n) => n.name === 'Screen Resolution').value;
        const CPU = data.find((n) => n.name === 'CPU').value;
        const modelCPU = data.find((n) => n.name === 'Model CPU').value;
        const RAM = data.find((n) => n.name === 'RAM').value;
        const typeHD = data.find((n) => n.name === 'Type HD').value;
        const sizeHD = data.find((n) => n.name === 'Size HD').value;
        const graphicsCard = data.find((n) => n.name === 'Graphics Card').value;
        let color = data.find((n) => n.name === 'Color').value;
        let os = data.find((n) => n.name === 'os').value || 'Операционная система неизвестна';
        const img = data.find((n) => n.name === 'img0').value;
        const price = data.find((n) => n.name === 'price').value;

        if (color === 'black') {
            color = 'цвет корпуса черный'
        } else if (color === 'green') {
            color = 'цвет корпуса зеленый'
        } else if (color === 'gold') {
            color = 'цвет корпуса золотистый'
        } else if (color === 'silver') {
            color = 'цвет корпуса серебристый'
        } else if (color === 'dark silver') {
            color = 'цвет корпуса серый'
        }

        return (
            <Router>
                <div>
                    <Grid fluid>
                        <Row className="goods">
                            <Col md={3}>
                                <img alt="" src={img}/>
                            </Col>
                            <Col md={5}>
                                <Link to={`/laptop/${manufacturer}/${model}`}><h4>{manufacturer} {model}</h4></Link>
                                <p>{diagonal}" {scrRes}, {CPU} {modelCPU}, {RAM}ГБ, {typeHD} {sizeHD}ГБ, {graphicsCard}, {os}, {color}</p>
                            </Col>
                            <Col md={2}>
                                <h4>{price}</h4>
                            </Col>
                            <Col md={2}>
                                <Button>В корзину</Button>
                            </Col>
                        </Row>
                    </Grid>
                    <Route path={`/laptop/${manufacturer}/${model}`} component={() => <ComputerInfo data={data}/>}/>
                </div>
            </Router>
        )
    }
}

export { Computer };