import React,{ Fragment } from 'react';
import { NavLink } from 'react-router-dom';

function Common(props) {
    const {name,visit,btnName,imgSrc} = props

    return (
        <Fragment>
            <section id="header" className="header-top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1 className="heading-one">
                                        {name}<br/>
                                        <strong>Harunur Roshid</strong>
                                    </h1>
                                    <h2 className="my-3 heading-two">We are the team of talented developer making websites</h2>
                                    <div className="mt-3">
                                        <NavLink to={visit} className="button">{btnName}</NavLink> 
                                    </div>
                                </div>

                                <div className="col-md-6 order-1 order-lg-2">
                                    <img src={imgSrc} className="header-img animated" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
        </Fragment>
    );
}

export default Common;