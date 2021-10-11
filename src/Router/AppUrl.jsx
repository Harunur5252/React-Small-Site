import React,{ Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import Services from '../Components/Services/Services';

function AppUrl(props) {
    return (
        <Fragment>
            <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/services' component={Services} />
                    <Redirect to='/' />
                </Switch>
            <Footer />
        </Fragment>
    );
}

export default AppUrl;