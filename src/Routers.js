import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import App from "./App";
import ComputerInfo from "./components/ComputerInfo";

const Main = () => (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/laptops/:laptop/:model" component={ComputerInfo}/>
        </div>
    </Router>
);

export default Main;