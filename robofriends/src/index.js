import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import CardList from './Cardlist'
import { Robots } from './Robots';

ReactDOM.render(<CardList Robots={Robots}/>, document.getElementById('root'));
registerServiceWorker();
