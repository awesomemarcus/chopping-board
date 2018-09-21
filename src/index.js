import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import './scss/main.scss';
import 'bootstrap/scss/bootstrap.scss';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faSearch, faStar, faDownload } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowLeft, faSearch, faStar, faDownload);

ReactDOM.render(<App />, document.getElementById('root'));