import React,{ Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppUrl from './Router/AppUrl';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../src/Assets/custom.css'

function App() {
  return (
    <Fragment>
        <BrowserRouter>
            <AppUrl />
        </BrowserRouter>
    </Fragment>
  );
}

export default App;
