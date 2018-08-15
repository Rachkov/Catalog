import React, { Component } from 'react';
import { Computers } from "./components/Computers"
import './App.css';

class App extends Component {
    state = {
        items: null
    }

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
        const { items } = this.state

        return (
            <div className="App">
                <Computers data={items}/>
            </div>
        );
    }
}

export default App;
