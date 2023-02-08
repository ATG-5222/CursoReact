import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './counterApp';

//import { HelloWorldApp } from './HelloWorldApp';

//import { FirstApp } from './FirstApp';
//<FirstApp title="Hola mundo" subTitle={123}/>

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={10} />
    </React.StrictMode>
)   