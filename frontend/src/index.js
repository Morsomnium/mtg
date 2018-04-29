import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LifeCounter from "./LifeCounter";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <LifeCounter />
        <LifeCounter />
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
