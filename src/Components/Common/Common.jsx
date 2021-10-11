import React,{ Fragment,useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';

function Common(props) {
    const {name,visit,btnName,imgSrc} = props
    const [ spinner, setSpinner ] = useState({
        loading:true
    });
      
    useEffect(() => {
        setTimeout(() => setSpinner({loading:false}), 1000)
    }, [])

    return (
        <Fragment>
            <section id="header" className="header-top">
                <div className="container-fluid">
                    {
                        spinner.loading ?
                            <div className="row">
                                <div className="col-10 mx-auto">
                                    <div className="row">
                                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                            <h1 className="heading-one">
                                               <Skeleton animation="wave" variant="text" style={{width:'100%', height:'6vh'}} />
                                               <Skeleton animation="wave" variant="text" style={{width:'100%', height:'6vh'}} />
                                            </h1>
                                            <Skeleton animation="wave" variant="text" style={{width:'100%', height:'5vh'}} />
                                            <div className="mt-3">
                                               <Skeleton animation="wave" variant="rectangular" style={{width:'25%', height:'6vh'}} /> 
                                            </div>
                                        </div>

                                        <div className="col-md-6 order-1 order-lg-2 mt-5">
                                          <Skeleton animation="wave" variant="rectangular" style={{width:'100%', height:'44vh'}} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            :


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
                    }
                </div>
            </section>
        </Fragment>
    );
}

export default Common;