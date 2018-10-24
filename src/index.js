import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Routers from './Routers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routers />, document.getElementById('root'));
registerServiceWorker();
