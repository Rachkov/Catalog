import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import history from 'history/createBrowserHistory';
import App from "./App";
import ComputerInfo from "./components/ComputerInfo";

const Main = () => (
    <Router history={history}>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/laptop/:laptop" component={ComputerInfo}/>
        </div>
    </Router>
);

export default Main;