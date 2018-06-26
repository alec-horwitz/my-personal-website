import React from 'react';
import ReactDOM from 'react-dom';
import './semantic/dist/semantic.min.css';
import { Segment } from 'semantic-ui-react'
import App from './App';
import './index.css';

ReactDOM.render(<Segment textAlign="center" inverted><App /></Segment>, document.getElementById('root'));
