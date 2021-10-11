import React,{ Fragment } from 'react';
import web from '../../Assets/images/computer-software-types.jpeg'
import Common from '../Common/Common';

function Home(props) {
    return (
        <Fragment>
           <Common name="Get your business with" imgSrc={web} visit="/services" btnName="Get Started" />
        </Fragment>
    );
}

export default Home;