import React,{ Fragment } from 'react';
import web from '../../Assets/images/R.jpg'
import Common from '../Common/Common';

function About(props) {
    return (
        <Fragment>
            <Common name="Welcome to about page" imgSrc={web} visit="/contact" btnName="Contact Now" />
        </Fragment>
    );
}

export default About;