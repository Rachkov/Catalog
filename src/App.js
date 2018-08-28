import React, {Component} from 'react';
import {Computers} from './components/Computers';
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
    state = {
      items: [],
    };
    componentDidMount() {
      /* TODO: Вынести в отдельный файл
      fetch выносишь в src/common/utils/http.js - в нем ему задаешь базовый url,
      http://localhost:3000
      рядом создаешь service.js куда выносишь конкретно это обращение к апишке
      т.е. в service,js у тебя будет функция async loadNotebooks(), которая
      должна вернуть тебе твою data. В этом компоненте останется только
      обращение к функции loadNotebooks и занесение полученного результата в
      стэит, это поможет в дальнейшем при подключении редакса.
      */
      fetch('http://localhost:3000/data/notebook.json')
        .then((responce) => {
          return responce.json();
        })
        .then((data) => {
          this.setState({items: data});
        });
    }
    render() {
      const {items} = this.state;
      return (
        <div className="App">
          <Grid fluid>
            <Row>
              <Col md={3}>
              </Col>
              <Col md={9}>
                <Computers data={items}/>
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
}

export default App;
